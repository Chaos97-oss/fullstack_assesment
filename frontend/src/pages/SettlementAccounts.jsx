import { useEffect, useState } from "react";
import axios from "axios";
import AccountCard from "../components/AccountCard";

const SettlementAccounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/settlement-accounts")
        .then(res => setAccounts(res.data.data))
        .catch(err => console.error(err));
    }, []);
