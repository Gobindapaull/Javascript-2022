async function generateTempEmail() {
    try {
        // Step 1: Get available domains
        const domainResponse = await fetch("https://api.mail.tm/domains");
        const domains = await domainResponse.json();
        if (!domains["hydra:member"] || domains["hydra:member"].length === 0) {
            throw new Error("No available domains found.");
        }

        const domain = domains["hydra:member"][0].domain; // Use first available domain
        const randomName = Math.random().toString(36).substring(2, 10);
        const email = `${randomName}@${domain}`;

        console.log("Email:", email);
        return email;
    } catch (error) {
        console.error("Error fetching temp email:", error.message);
    }
}

generateTempEmail();
