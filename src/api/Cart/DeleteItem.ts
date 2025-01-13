import { getAccessToken } from "../getAccessToken.js";

export async function DeleteItemByID(id:string): Promise<boolean> {
    const accessToken = await getAccessToken()
    const url = `https://techbox.developimpact.net/o/c/carts/${id}`;

    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to delete product: ${res.status}`);
    }

    return true
}