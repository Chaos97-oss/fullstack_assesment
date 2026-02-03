const AccountCard = ({ account }) => {
  // Simple logic to choose icon based on bank name or currency
  const isInternational = account.bankName.includes("Mercury") || account.currency === "USD";

  return (
    <div className="account-card">
      <div className="card-left">
        <div className="bank-icon-placeholder">
          {/* Bank Symbol vs generic letter */}
          {isInternational ? (
            <span style={{ fontSize: "24px" }}>🌍</span>
          ) : (
            <span style={{ fontSize: "24px" }}>🏛️</span>
          )}
        </div>
        <div className="account-details">
          <h3>
            {account.bankName}
            {account.isPrimary && <span className="badge-primary">PRIMARY</span>}
          </h3>
          <p className="sub-text">{account.accountName}</p>
          <div className="account-number">
            {account.accountNumber}
            <span className="copy-icon" title="Copy Account Number" style={{ cursor: 'pointer', marginLeft: '8px', color: '#cbd5e1', fontSize: '14px' }}>
              ❐
            </span>
            {account.currency === "USD" && <span className="badge-currency">USD</span>}
          </div>
          <div className="status-line">
            <div className="verified-dot"></div>
            <span className="verified-text">Verified</span>
            {account.currency === "USD" ? (
              <span>• International Wire</span>
            ) : (
              <span>• {account.currency || "NGN"} Settlement</span>
            )}
          </div>
        </div>
      </div>

      <div className="card-actions">
        {/* Actions Row */}
        <div className="action-row">
          <button className="icon-btn" title="Edit">✎</button>
          <button className="icon-btn" title="Delete">🗑</button>
        </div>
        {/* Set Primary Button logic */}
        {!account.isPrimary ? (
          <button className="set-primary-btn">Set as Primary</button>
        ) : null}
      </div>

      {/* Visual decoration */}
      <div className="card-bg-decoration">
        {isInternational ? "🌍" : "🏛️"}
      </div>
    </div>
  );
};

export default AccountCard;