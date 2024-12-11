import bcrypt from "bcryptjs";
import { getAccessToken } from "../getAccessToken";

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

  