import { getAccessToken } from "../getAccessToken.js";

async function GETProduct (accessToken: string, url: string){
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

export async function fetchProductByID(id: Number) {
    const accessToken = await getAccessToken();
    const url = `https://techbox.developimpact.net/o/c/products/${id}`;
    return GETProduct(accessToken, url);
}

export async function FetchAllProduct(){
    const accessToken = await getAccessToken();
    const url = `https://techbox.developimpact.net/o/c/products`;
    const http = "https://techbox.developimpact.net";
    const res = await GETProduct(accessToken, url);
    
    const formattedItems = res.items.map(item => ({
        productImage: http + item.proImage?.link?.href,
        productName: item.productname,
        productDes: item.proDescription,
        price: item.basePrice,
        status: item.availableStatus?.key,
    }));
    console.log(res.items);
    
    return formattedItems
}