import { getAccessToken } from "../getAccessToken.js";

export async function fetchProductByID(id: Number) {
    const accessToken = await getAccessToken();
    const url = `https://techbox.developimpact.net/o/c/products/${id}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    })
    if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Failed to fetch product data:', errorDetails);
        return [];
    }
    const data = await response.json();
    return data;
}