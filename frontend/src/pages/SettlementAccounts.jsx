import { useEffect, useState } from "react";
import axios from "axios";
import AccountCard from "../components/AccountCard";
import Sidebar from "../components/Sidebar";
import InfoBanner from "../components/InfoBanner";
import "../styles/settlement.css";

const SettlementAccounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Keep existing logic
        axios
        .get("http://localhost:5000/api/settlement-accounts")
        .then(res => setAccounts(res.data.data))
        .catch(err => {
            console.error("Failed to fetch", err);
            // Fallback mock data if server is down for UI
            // setAccounts([
            //   { id: 1, bankName: "GTBank Plc", accountName: "Akinsola Jegede Enterprises", accountNumber: "0123456789", isPrimary: true, currency: "NGN" },
            //   { id: 2, bankName: "Zenith Bank", accountName: "Akinsola Jegede Enterprises", accountNumber: "2008912345", isPrimary: false, currency: "NGN" },
            //   { id: 3, bankName: "Mercury (Evolve Bank & Trust)", accountName: "Akinsola Jegede Inc.", accountNumber: "**** 8821", isPrimary: false, currency: "USD" }

            // ]);
        });
    }, []);

    return (
        <div className="layout">
        <Sidebar />

        <main className="content">
            <div className="top-bar">
            <div className="breadcrumbs">
                <span className="crumb-passive">Settings</span>
                <span className="crumb-separator">›</span>
                <span className="crumb-active">Settlement Accounts</span>
            </div>

            <div className="top-bar-right">
                <div className="status-badge-capsule">
                <div className="status-dot"></div>
                ACTIVE
                </div>

                <button className="theme-toggle-btn">
                🌙
                </button>

                <div className="user-profile-widget">
                <div className="user-info-text">
                    <span className="user-name">Akinsola Jegede</span>
                    <span className="user-role">Admin</span>
                </div>
                <div className="user-avatar">
                    AJ
                </div>
                </div>
            </div>
            </div>

            <div className="header">
            <div>
                <h1>Settlement Accounts</h1>
                <p>Manage the bank accounts where your settlements are paid out.</p>
            </div>
            <button className="primary-btn">
                <span>+</span> Add New Account
            </button>
            </div>

            <InfoBanner />

            <div className="accounts-section">
            <div className="accounts-list">
                <h3>Your Linked Accounts</h3>
                {accounts.map(account => (
                <AccountCard key={account.id} account={account} />
                ))}
            </div>

            <div className="help-card">
                <div className="help-bg-icon">🎧</div>
                <h3>Need help?</h3>
                <p>Having trouble adding an account or receiving settlements?</p>
                <button>Contact Support</button>
            </div>
            </div>
        </main>
        </div>
    );
    };

export default SettlementAccounts;