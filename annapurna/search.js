const axios = require("axios");
const cheerio = require("cheerio");

async function searchPayroll() {

    // GET PAGE
    const page = await axios.get("https://www.ayn24p.in/");

    const $ = cheerio.load(page.data);

    // CSRF
    const csrf = $("#csrf_token").val();

    // SEARCH
    const response = await axios.post(
        "https://www.ayn24p.in/SiteController/search",
        new URLSearchParams({
            block_municipality: "HABRA-II",
            gp_ward: "GUMA-II",
            search_value: "5154",
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

    // LOAD RESULT
    const result = cheerio.load(response.data);

    // EXTRACT TABLE DATA
    const rows = [];

    result("table tbody tr").each((i, el) => {

        const cols = result(el).find("td");

        rows.push({
            name: result(cols[0]).text().trim(),
            village: result(cols[1]).text().trim(),
            father_name: result(cols[2]).text().trim(),
            status: result(cols[3]).text().trim()
        });
    });

    console.log(rows);
}

searchPayroll();
