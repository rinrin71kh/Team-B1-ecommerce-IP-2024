// import { BakongKHQR, IndividualInfo, khqrData } from "bakong-khqr";
// const {BakongKHQR, khqrData, IndividualInfo, MerchantInfo, SourceInfo} = require("bakong-khqr");
export default async function getQRPay (){
    
    const optionalData = {
        currency: khqrData.currency.usd,
        amount: 100.5,
        mobileNumber: "85512233455",
        storeLabel: "Coffee Shop",
        terminalLabel: "Cashier_1",
        purposeOfTransaction: "oversea",
        languagePreference: "km",
        merchantNameAlternateLanguage: "ចន សីន",
        merchantCityAlternateLanguage: "ៀមប",
    };
    const individualInfo = new IndividualInfo(
        "khem_soksombath@trmc",
        "Jonh Smith",
        "PHNOM PENH",
        optionalData);
    const KHQR = new BakongKHQR();
    const individual = await KHQR.generateIndividual(individualInfo);
    
    console.log("qr: " + individual.data);
    console.log("md5: " + individual.data.md5);
}