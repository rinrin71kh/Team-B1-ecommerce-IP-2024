<template>
    <div class="flex items-center justify-center m-4 md:m-12">
      <div class="bg-white rounded-lg shadow-lg max-w-5xl w-full relative p-4 md:p-8">
        <div class="custom-content">
          <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <div class="left flex flex-col gap-6 justify-center items-center">
              <div v-if="!success" class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                <div class="flex flex-col gap-6">
                  <h3 class="text-3xl md:text-5xl font-bold">Payment amount</h3>
                  <div class="flex gap-2 flex-col">
                    <h1 class="text-2xl md:text-4xl font-bold">${{ amountInKHR }}</h1>
                    <v-btn color="blue">Pay with Credit Card</v-btn>
                  </div>
                  <div v-if="loading" class="flex relative gap-4 justify-center items-center w-full">
                    <h2>Checking Transaction Status...</h2>
                    <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <p v-if="error">{{ error }}</p>
                </div>
                <div>
                  <div class="qrcode-container shadow-xl rounded-xl pb-12">
                    <svg width="300" height="150" xmlns="http://www.w3.org/2000/svg" class="rounded-md">
                      <path d="M 0 0 H 300 Q 300 0 300 8 V 60 H 0 V 0 Z" fill="#F44336" />
                      <text x="50%" y="30" font-size="24" fill="white" font-weight="bold" text-anchor="middle" alignment-baseline="middle">KHQR</text>
                      <polygon points="300,60 300,100 250,60" fill="#F44336" />
                      <text x="40" y="100" font-size="15" fill="#212121" font-weight="600" text-anchor="start" alignment-baseline="middle">TEAMB1 ECOMMERCE</text>
                      <text x="40" y="140" font-size="36" fill="#212121" font-weight="bold" text-anchor="start" alignment-baseline="middle">$ {{ amountInKHR }}</text>
                    </svg>
                    <canvas id="qrcode"></canvas>
                  </div>
                </div>
              </div>
              <div v-else>
                <pre class="text-green-500 font-bold text-2xl">Successfully Received ${{ response.data.amount }}</pre>
                <h4 class="text-xl font-bold">Thank you for your purchase.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import QRCode from "qrcode";
  import axios from "axios";
  import { ChangeBoughtStatus } from "@/api/Cart/ChangeStatus";
  import router from "@/router";
  import { getBakongQR, getCurrentDateTime, sendTelegramMessage, updateCouponQTY } from "@/api/payway/BakongPay";
  import { ref } from "vue";
  
  export default {
    data() {
      return {
        md5: "",
        response: null,
        error: null,
        success: false,
        popup: true,
        loading: ref(true),
      };
    },
    props: {
      amountInKHR: {
        required: true,
      },
      itemsID: {
        type: String[''],
        required: true,
      },
      QRpayComponent: {
        type: String,
        required: true,
      },
      CouponID: {
        type: String,
        required: true,
      },
      CouponQTY: {
        type: Number,
        required: true,
      }
    },
    methods: {
      async generateQRCode() {
        const canvas = document.getElementById("qrcode");
        const result = await getBakongQR(this.amountInKHR);
        QRCode.toCanvas(canvas, result.qr, (error) => {
          if (error) {
            console.error("Error generating QR code:", error);
          }
        });
  
        this.md5 = result.md5;
        this.checkTransactionStatus();
      },
      async checkTransactionStatus() {
        const url = import.meta.env.VITE_BAKONG_ACCESS_URL;
        const accessToken = import.meta.env.VITE_BAKONG_API_KEY;
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
            this.itemsID.map((item) => ChangeBoughtStatus(item));
            console.log(res);
  
            const date = getCurrentDateTime();
            await sendTelegramMessage(date + "- Order successfully Purchase by testing@user: " + this.amountInKHR + "$. " +
              "From account: " + res.data.data.fromAccountId + " to " + res.data.data.toAccountId + " transactionRef: " + res.data.data.externalRef + "."
            );
  
            await updateCouponQTY(this.CouponID, this.CouponQTY);
            setTimeout(() => sharedState.QRpayComponent = null, 3000);
            setTimeout(() => router.push("/"), 3000);
          } else {
            // If not successful, retry after a delay
            setTimeout(this.checkTransactionStatus, 5000); // Retry every 5 seconds
          }
        } catch (err) {
          this.error = err.response ? err.response.data : err.message;
          setTimeout(this.checkTransactionStatus, 5000);
        }
      },
      togglePopup() {
        this.popup = !this.popup;
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