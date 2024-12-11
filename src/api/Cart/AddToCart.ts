import { user } from "@nextui-org/theme";
import { getAccessToken } from "../getAccessToken";

export async function AddToCart(cartstatus: string, productid: string, qty: number, userfid: string) {
    const accessToken = await getAccessToken()
    const jsonObject = {
        "cartstatus": cartstatus,
        "productid": productid,
        "qty": qty,
        "userfid": userfid
    };

    const url = 'https://techbox.developimpact.net/o/c/carts/';
    const urlGet = `https://techbox.developimpact.net/o/c/carts/?filter=productid%20eq%20%27${productid}%27`
    //Check if the data already have in db
    const response = await fetch(urlGet, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Failed to fetch user data:', errorDetails);
        return [];
    }
    const getExistingData = await response.json();
    
    if (!getExistingData.items[0]) {
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
    } else {

        const putObject = {
            "qty": getExistingData?.items[0]?.qty + 1,
        };

        const urlPATCH = `https://techbox.developimpact.net/o/c/carts/${getExistingData?.items[0]?.id}`

        fetch(urlPATCH, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
            body: JSON.stringify(putObject)
        })
            .then(url => {
                console.log("Record created successfully!", url)
            })
            .catch(error => {
                console.log("Error creating record:", url);
            });
    }
}

export async function DecreaseQTY(cartstatus: string, productid: string, qty: number, userfid: string) {
    const accessToken = await getAccessToken()
    const jsonObject = {
        "cartstatus": cartstatus,
        "productid": productid,
        "qty": qty,
        "userfid": userfid
    };

    const url = 'https://techbox.developimpact.net/o/c/carts/';
    const urlGet = `https://techbox.developimpact.net/o/c/carts/?filter=productid%20eq%20%27${productid}%27`
    //Check if the data already have in db
    const response = await fetch(urlGet, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Failed to fetch user data:', errorDetails);
        return [];
    }
    const getExistingData = await response.json();
    
    if (!getExistingData.items[0]) {
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
    } else {

        const putObject = {
            "qty": getExistingData?.items[0]?.qty + -1,
        };

        const urlPATCH = `https://techbox.developimpact.net/o/c/carts/${getExistingData?.items[0]?.id}`

        fetch(urlPATCH, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
            body: JSON.stringify(putObject)
        })
            .then(url => {
                console.log("Record created successfully!", url)
            })
            .catch(error => {
                console.log("Error creating record:", url);
            });
    }
}