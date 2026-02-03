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

    return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
        <h2>Settlement Accounts</h2>
        <p>Manage the bank accounts where your settlements are paid out.</p>

        {accounts.map(account => (
            <AccountCard key={account.id} account={account} />
        ))}
        </div>
    );
};

export default SettlementAccounts;