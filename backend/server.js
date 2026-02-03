require("dotenv").config();

const express = require ("express")
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({origin: [
    "http://localhost:3000",
    "https://vitalswapassesment.vercel.app",
    "https://vitalswapassesment-git-master-chaos-97oss-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true}));
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
    {
        id: 2,
        bankName: "Zenith Bank",
        accountName: "Akinsola Jegede Enterprises",
        accountNumber: "2008912345",
        currency: "NGN",
        type: "Settlement",
        isPrimary: false,
        verified: true
    },
    {
    id: 3,
    bankName: "Mercury (Evolve Bank & Trust)",
    accountName: "Akinsola Jegede Inc.",
    accountNumber: "****8821",
    currency: "USD",
    type: "International Wire",
    isPrimary: false,
    verified: true
    }
    ];

    app.get("/api/settlement-accounts", (req, res) => {
    res.json({
        success: true,
        data: settlementAccounts
    });
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});