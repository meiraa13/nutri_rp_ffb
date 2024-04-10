import axios from "axios";

export const api = axios.create({
    baseURL:"https://nutri-rp-bff.onrender.com",
    timeout:10000
})