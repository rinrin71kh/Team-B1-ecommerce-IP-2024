//Get access token from Rest API
export async function getAccessToken(): Promise<string | undefined> {
  //Suppose store in env but it doesn't matter
    const clientId = import.meta.env.VITE_CLIENTID;
    const clientSecret = import.meta.env.VITE_CLIENTSECRET;
    const tokenUrl = import.meta.env.VITE_TOKEN_URL;
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
        }),
      });
  
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Failed to fetch access token:', errorDetails);
        return undefined;
      }
  
      const data = await response.json();
      return await data.access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
      return undefined;
    }
  }

  export function getUser(){
    const user_token = localStorage.getItem('authToken');
    return user_token;
  }
  