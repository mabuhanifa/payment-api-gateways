require("dotenv").config();

const storeId = process.env.STORE_ID;
const apiKey = process.env.API_SECRET_KEY;
const storeName = process.env.STORE_NAME;

console.log(
  `Store Name: ${storeName}`,
  `Store ID: ${storeId}`,
  `API Key: ${apiKey}`
);
