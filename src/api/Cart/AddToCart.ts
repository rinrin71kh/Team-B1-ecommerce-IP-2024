import { getAccessToken } from "../getAccessToken.js";


export async function AddToCart(cartstatus: string, productid: string, qty: number, userfid: string) : Promise<boolean> {
    const accessToken = await getAccessToken()
    const jsonObject = {
        "cartstatus": cartstatus,
        "productid": productid,
        "qty": qty,
        "userfid": userfid
    };

    const url = 'https://techbox.developimpact.net/o/c/carts/';
    const getExistingData = await getExistingDatas(productid);
    //If dont have perfom if
    //if have check status if it is = carts perfom increase
    console.log("ExistingData" + getExistingData);  
    
    //If not, add new data to db. Else, update the existing data.
    if (!getExistingData.items[0]) {
        const checkAdd = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
            body: JSON.stringify(jsonObject)
        })
        if(checkAdd.ok){
            return true
        }
    } else {

        const putObject = {
            "qty": getExistingData?.items[0]?.qty + 1,
        };

        const urlPATCH = `https://techbox.developimpact.net/o/c/carts/${getExistingData?.items[0]?.id}`

        const check = await fetch(urlPATCH, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
            body: JSON.stringify(putObject)
        })

        if(check.ok){
            return true
        }
            
    }
}

//Get Exisiting Records
async function getExistingDatas(productid: string) {
    const accessToken = await getAccessToken()
    const urlGet = `https://techbox.developimpact.net/o/c/carts/?filter=productid%20eq%20%20%27${productid}%27%20and%20cartstatus%20eq%20%27Carts%27`
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
    return await response.json();
}

//Decrease QTY
export async function DecreaseQTY(productid: string) : Promise<boolean> {
    
    const accessToken = await getAccessToken()

    const url = 'https://techbox.developimpact.net/o/c/carts/';
    
    const getData = await getExistingDatas(productid);
    
    if (!getData?.items[0]) {
        console.warn('Failed to retrieve data');
    } else {

        const putObject = {
            "qty": getData?.items[0]?.qty -1,
        };

        const urlPATCH = `https://techbox.developimpact.net/o/c/carts/${getData?.items[0]?.id}`

        const check = await fetch(urlPATCH, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
            body: JSON.stringify(putObject)
        })

        if (check.ok) {
            return true
        } else {
            console.warn('Failed to update data');
    }
}
}