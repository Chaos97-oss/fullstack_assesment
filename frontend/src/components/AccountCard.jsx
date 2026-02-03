const AccountCard = ({ account }) => {
    return (
        <div
        style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}
        >
    <div>
    <h4>
        {account.bankName}{" "}
        {account.isPrimary && (
        <span style={{ color: "green", fontSize: "12px" }}>
            PRIMARY
        </span>
        )}
    </h4>
    <p>{account.accountName}</p>
    <p>{account.accountNumber}</p>
    <small>
        {account.currency} · {account.type}
    </small>
    <br />
    <small style={{ color: "green" }}>Verified</small>
    </div>

    <div>
        {!account.isPrimary && (
            <button style={{ marginRight: "10px" }}>Set as Primary</button>
            )}
            <button>Edit</button>
        </div>
        </div>
    );
    };

    export default AccountCard;