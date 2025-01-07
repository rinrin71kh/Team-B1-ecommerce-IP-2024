import { getAccessToken } from "../getAccessToken.js";

export async function getProductbyCategories(category: string) {
  
    const url =
      `https://techbox.developimpact.net/o/c/products/?filter=category%20eq%20%27${category}%27`;
  
    const accessToken = await getAccessToken();
  
    if (!accessToken) {
      console.error('Access token is undefined. Cannot proceed with login.');
      return [];
    }
  
    try {
      const response = await fetch(url, {
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
      const data = await response.json();           
      return Array.isArray(data) ? data : data.items || []
    } catch (error) {
      console.error('Error fetching user data:', error);
      return [];
    }
  }