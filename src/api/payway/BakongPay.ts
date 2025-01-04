import { KHQR, CURRENCY, COUNTRY, TAG } from "ts-khqr";
export async function getBakongQR(amountInKHR: number) {

  const result = KHQR.generate({
      tag: TAG.INDIVIDUAL,
      accountID: "khem_soksombath@trmc",
      merchantName: "TEAMB1-GIC25",
      merchantID: "012345678",
      acquiringBank: "Dev Bank",
      merchantCity: "Phnom Penh",
      currency: CURRENCY.KHR,
      amount: amountInKHR,
      countryCode: COUNTRY.KH,
      additionalData: {
          mobileNumber: "85512345678",
          billNumber: "INV-2022-12-25",
          storeLabel: "Ishin Shop",
          terminalLabel: "012345",
          purposeOfTransaction: "Payment",
      },
      languageData: {
          languagePreference: "ZH",
          merchantNameAlternateLanguage: "文山",
          merchantCityAlternateLanguage: "金边",
      },
      upiMerchantAccount: "",
  });    
  
  return result.data;

}

export const sendTelegramMessage = async ( message: string) => {
    const telegramApiUrl = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_TELEGRAM_CHAT_ID}&text=${message}`;
    console.log(telegramApiUrl);
    let api = new XMLHttpRequest()
    api.open("GET", telegramApiUrl, true)
    api.send()
    
  };
  export const getCurrentDateTime = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  
  