const axios = require('axios')

const detect_country = async(IP) => {
    try {
        const IP_Data = await axios.get(`http://ip-api.com/json/${IP}`);
        if (IP_Data.data.status == 'success')
            console.log(IP_Data.data.countryCode)
        else console.log('not find ip address')
    } catch (err) {
        console.log(err);
    }
};

detect_country("IP ADDRESS")
