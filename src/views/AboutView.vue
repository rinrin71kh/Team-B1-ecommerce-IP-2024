<template>
  <div>
    <div class="qrcode-container">
      <h1>KHQR</h1>
      <canvas id="qrcode"></canvas>
    </div>
    <div v-if="!success">
      <h2>Checking Transaction Status...</h2>
      <p v-if="error">{{ error }}</p>
    </div>
    <div v-else>
      <!-- <h1>Transaction Successful!</h1>
      <p>Transaction Details:</p> -->
      <pre>{{ response }}</pre>
    </div>
  </div>
<!-- Ref: https://bakong.nbc.gov.kh/download/KHQR/integration/Bakong%20Open%20API%20Document.pdf -->
</template>
<script>
import { KHQR, CURRENCY, COUNTRY, TAG } from "ts-khqr";
import QRCode from "qrcode";
import axios from "axios";

export default {
  data() {
    return {
      md5: "",
      response: null,
      error: null,
      success: false,
    };
  },
  props:{
    amountInKHR: ""
  },
  methods: {
    async generateQRCode() {
      const canvas = document.getElementById("qrcode");
      const result = KHQR.generate({
        tag: TAG.INDIVIDUAL,
        accountID: "khem_soksombath@trmc",
        merchantName: "TEAMB1-GIC25",
        merchantID: "012345678",
        acquiringBank: "Dev Bank",
        merchantCity: "Phnom Penh",
        currency: CURRENCY.KHR,
        amount: 200,
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

      QRCode.toCanvas(canvas, result.data.qr, (error) => {
        if (error) {
          console.error("Error generating QR code:", error);
        }
      });

      this.md5 = result.data.md5;

      this.checkTransactionStatus();
    },
    async checkTransactionStatus() {
      const url = "https://api-bakong.nbc.gov.kh/v1/check_transaction_by_md5";
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNDU3MzJlMzhiN2E3NDM3NiJ9LCJpYXQiOjE3MzM0NTU4NjEsImV4cCI6MTc0MTIzMTg2MX0.VF3vKIm0eSVvT9VqiUXMy7rPPqO-bzin8wcKlwNUR2g";

      try {
        const res = await axios.post(
          url,
          { md5: this.md5 },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Check if the transaction is successful
        if (res.data.responseMessage === "Success") {
          this.success = true;
          this.response = res.data;
        } else {
          // If not successful, retry after a delay
          setTimeout(this.checkTransactionStatus, 5000); // Retry every 5 seconds
        }
      } catch (err) {
        this.error = err.response ? err.response.data : err.message;
        setTimeout(this.checkTransactionStatus, 5000);
      }
    },
  },
  mounted() {
    this.generateQRCode();
  },
};
</script>

<style scoped>
.qrcode-container {
  text-align: center;
  margin-bottom: 20px;
}
canvas {
  display: block;
  margin: 0 auto;
}
h2 {
  color: #007bff;
}
p {
  color: #dc3545;
}
</style>
