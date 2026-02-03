const express = require ("express")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const settlementAccounts = [
{
    id: 1,
    bankName: "GTBank Plc",
    accountName: "Akinsola Jegede Enterprises",
    accountNumber: "0123456789",
    currency: "NGN",
    type: "Settlement",
    isPrimary: true,
    verified: true
},