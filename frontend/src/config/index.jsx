import server from "@/environment"

const {default:axios} = require("axios")

export const BASE_URL = server

export const clientServer = axios.create({ //axios is used to interact with backend
    baseURL:BASE_URL
})