import { getAccessToken } from "../getAccessToken";

export async function ChangeBoughtStatus(productid: string) {
    const accessToken = await getAccessToken()
    const jsonObject = {
        "cartstatus": "Bought",
    };

    const url = `https://techbox.developimpact.net/o/c/carts/${productid}`;
    fetch(url, {
        method: 'PATCH',
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
