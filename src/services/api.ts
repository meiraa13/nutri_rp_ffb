import axios from "axios";

export const api = axios.create({
    baseURL:"https://2881.alextoledo.com.br",
    timeout:100000
})