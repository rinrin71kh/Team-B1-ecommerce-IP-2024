import { getAccessToken } from "../getAccessToken";

export async function AddToCart(cartstatus: string,productid:string,qty:number,userfid:string) {
    const accessToken = await getAccessToken()
    const jsonObject = {
        "cartstatus": "string",
        "productid": "string",
        "qty": 0,
        "userfid": "string"
    };
    const url = 'https://techbox.developimpact.net/o/c/carts/';

    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        body: JSON.stringify(jsonObject)
    })
        .then(url => {
            console.log("Record created successfully!", url)
        })
        .catch(error => {
            console.log("Error creating record:", url);
        });
}