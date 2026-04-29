import {apiUrl} from "../apiService.js";

export const getProducts = async () => {
    try {
        const response = await fetch(`${apiUrl}/products`);
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.error(e)
        return [];
    }
}