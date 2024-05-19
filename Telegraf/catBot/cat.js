import axios from "axios"
import "dotenv/config"

export const getCat = async () => {
    const response = await axios.get(process.env.CAT_URL)
    // console.log(response)
    return response?.data[0].url
}
