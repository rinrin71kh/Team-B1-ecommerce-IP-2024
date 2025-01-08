import { getAccessToken } from "../getAccessToken.js";

export async function getCart(userid: string): Promise<any[]> {
  const url = `https://techbox.developimpact.net/o/c/carts/?filter=cartstatus%20eq%20%20%27Carts%27%20and%20userfid%20eq%20%27${userid}%27`
  
  const accessToken = await getAccessToken();

  if (!accessToken) {
    console.error("Access token is undefined. Cannot proceed with fetching cart.");
    return [];
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Failed to fetch cart data:", errorDetails);
      return [];
    }

    const cartData = await response.json();

    // Check if `items` exist in the response
    if (!cartData.items || cartData.items.length === 0) {
      console.warn("Cart is empty or items are missing.");
      return [];
    }

    // Fetch product details for each item in the cart
    const combinedData = await Promise.all(
      cartData.items.map(async (item: any) => {
        const productUrl = `https://techbox.developimpact.net/o/c/products/${item.productid}`;
        const productResponse = await fetch(productUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const productData = await productResponse.json();
        return { ...item, productDetails: productData };
      })
    );

    // console.log("Combined Data:", combinedData);
    return combinedData;
  } catch (error) {
    console.error("Error fetching cart or product data:", error);
    return [];
  }
}

export async function getCartByID(userid: string, id:Number): Promise<any[]> {
  const url = `https://techbox.developimpact.net/o/c/carts/?filter=cartstatus%20eq%20%20%27Carts%27%20and%20userfid%20eq%20%27${userid}%27`
  
  const accessToken = await getAccessToken();

  if (!accessToken) {
    console.error("Access token is undefined. Cannot proceed with fetching cart.");
    return [];
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Failed to fetch cart data:", errorDetails);
      return [];
    }

    const cartData = await response.json();
    console.log(cartData);
    

    // Check if `items` exist in the response
    if (!cartData.items || cartData.items.length === 0) {
      console.warn("Cart is empty or items are missing.");
      return [];
    }

    // Fetch product details for each item in the cart
        const productUrl = `https://techbox.developimpact.net/o/c/products/${cartData.id}`;
        const productResponse = await fetch(productUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const productData = await productResponse.json();

    // console.log("Combined Data:", combinedData);
  } catch (error) {
    console.error("Error fetching cart or product data:", error);
    return [];
  }
}