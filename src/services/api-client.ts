import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "cd41d8a9efc04043a6e9d8b0566ba376"
    }
})