import bcrypt from "bcryptjs";

async function getAccessToken(): Promise<string | undefined> {
  //Suppose store in env but it doesn't matter
    const clientId = 'id-ff33fd67-2662-23d2-e387-7e660796b71';
    const clientSecret = 'secret-16433662-63e6-dea2-91b5-c0be0d0db7c';
    const tokenUrl = 'https://techbox.developimpact.net/o/oauth2/token';
  
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
      return data.access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
      return undefined;
    }
  }
  function encodeEmail(email: string): string {
    return encodeURIComponent(email);
  }
  async function FetchUser(email:string, password:string) {
    const encodedEmail = encodeEmail(email);    
    const url =
      `https://techbox.developimpact.net/o/c/users/?fields=email%2Cpassword&filter=email%20eq%20%27${encodedEmail}%27`;
  
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

  async function validatePassword(inputPassword: string, storedHashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(inputPassword, storedHashedPassword);
  }  

  export async function isLogin(email:string,password: string) {
    const user = await FetchUser(email, password);    
    return await validatePassword(password,user[0].password);
  }

  