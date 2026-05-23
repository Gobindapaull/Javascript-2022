const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function searchPayroll() {

    // GET PAGE
    const page = await axios.get("https://www.ayn24p.in/");

    const $ = cheerio.load(page.data);

    // CSRF
    const csrf = $("#csrf_token").val();

    // STORE RESULTS
    const pendingResults = [];

    // LOOP 0000 -> 9999
    for (let i = 0; i <= 9999; i++) {

        const searchValue = i.toString().padStart(4, "0");

        try {

            const response = await axios.post(
                "https://www.ayn24p.in/SiteController/search",
                new URLSearchParams({
                    block_municipality: "HABRA-II",
                    gp_ward: "GUMA-II",
                    search_value: searchValue,
                    csrf_nis_security: csrf
                }),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "User-Agent": "Mozilla/5.0",
                        Cookie: page.headers["set-cookie"]?.join("; ")
                    }
                }
            );

            const result = cheerio.load(response.data);

            result("table tbody tr").each((i, el) => {

                const cols = result(el).find("td");

                const data = {
                    search_value: searchValue,
                    name: result(cols[0]).text().trim(),
                    village: result(cols[1]).text().trim(),
                    father_name: result(cols[2]).text().trim(),
                    status: result(cols[3]).text().trim()
                };

                // SAVE ONLY PENDING
                if (data.status === "Pending") {

                    console.log(data);

                    pendingResults.push(data);
                }
            });

        } catch (error) {
            console.log("ERROR:", searchValue);
        }
    }

    // SAVE JSON FILE
    fs.writeFileSync(
        "pending_data.json",
        JSON.stringify(pendingResults, null, 2)
    );

    console.log("\nSaved Pending Data -> pending_data.json");
}

searchPayroll();
