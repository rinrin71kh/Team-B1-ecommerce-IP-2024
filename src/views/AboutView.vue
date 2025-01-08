<template>
  <div class="upload-receipt">
    <h1>Upload Receipt</h1>
    <form @submit.prevent="uploadReceipt">
      

      <div>
        <label for="userNameReceipt">Username:</label>
        <input
          type="text"
          id="userNameReceipt"
          v-model="formData.userNameReceipt"
          required
        />
      </div>

      <div>
        <label for="receiptFile">Receipt Image:</label>
        <input
          type="file"
          id="receiptFile"
          @change="handleFileUpload"
          accept="image/*"
          required
        />
      </div>

      <button type="submit">Upload Receipt</button>
    </form>
  </div>
</template>

<script>
import { getAccessToken } from "@/api/getAccessToken";
import axios from "axios";

export default {
  name: "UploadReceipt",
  data() {
    return {
      formData: {
        externalReferenceCode: "",
        keywords: [],
        taxonomyCategoryIds: [],
        userNameReceipt: "",
        receipt: null, // File will be stored here
      },
      keywordsInput: "",
      taxonomyIdsInput: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.receipt = file;
      }
    },
    async uploadReceipt() {
      try {
        // Convert inputs to proper types
        this.formData.keywords = this.keywordsInput.split(",").map((item) => item.trim());
        this.formData.taxonomyCategoryIds = this.taxonomyIdsInput
          .split(",")
          .map((id) => parseInt(id.trim()));

        // Create FormData object
        const form = new FormData();
        form.append("userNameReceipt", this.formData.userNameReceipt);
        form.append("receipt", this.formData.receipt);

        // Make API call
        const accessToken = await getAccessToken()
        
        const url = "https://techbox.developimpact.net/o/c/receipts/"
        // await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //         "Authorization": "Bearer " + accessToken
        //     },
        //     form
        // })

        const response = await axios.post(
          url,
          form,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + accessToken
            },
          }
        );

        // Handle success
        console.log("Upload successful:", response.data);
        alert("Receipt uploaded successfully!");
      } catch (error) {
        // Handle error
        console.error("Error uploading receipt:", error);
        alert("Failed to upload receipt. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.upload-receipt {
  max-width: 600px;
  margin: 0 auto;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
