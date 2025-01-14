import bcrypt from "bcryptjs";
function encryptPasswordSync(password: string): string {
  const saltRounds = 10; // Determines the complexity of the hash
  const salt = bcrypt.genSaltSync(saltRounds); // Generate the salt synchronously
  const hashedPassword = bcrypt.hashSync(password, salt); // Hash the password synchronously
  return hashedPassword;
}

async function postRecord(accessToken: any, email: string, password: string, lastname: string, firstname: string, phoneNumber: string): Promise<boolean> {
  var encryptPass = encryptPasswordSync(password)

  const jsonObject = {
    "email": email,
    "name": lastname + " " + firstname,
    "password": encryptPass,
    "phoneNumber": phoneNumber
  };
  const url = 'https://techbox.developimpact.net/o/c/users/';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    },
    body: JSON.stringify(jsonObject)
  })
  if (res.ok) {
    return true;
  } else {
    return false;
  }

}

export async function submitForm(email: string, password: string, lastname: string, firstname: string, phoneNumber: string) {

  const clientId = 'id-ff33fd67-2662-23d2-e387-7e660796b71';
  const clientSecret = 'secret-16433662-63e6-dea2-91b5-c0be0d0db7c';
  const tokenUrl = 'https://techbox.developimpact.net/o/oauth2/token';
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id': clientId,
      'client_secret': clientSecret
    })
  });
  if (response.ok) {
    const data = await response.json();
    return postRecord(data.access_token, email, password, lastname, firstname, phoneNumber);
  } else {
    console.log("Error");
  }
}
