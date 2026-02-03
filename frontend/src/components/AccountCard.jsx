const AccountCard = ({ account }) => {
  return (
    <div className="account-card">
      <div className="card-left">
        <div className="bank-icon-placeholder">
          {/* Use first letter of bank name or a generic icon */}
          {account.bankName ? account.bankName.charAt(0) : "B"}
        </div>
        <div className="account-details">
          <h3>
            {account.bankName}
            {account.isPrimary && <span className="badge-primary">PRIMARY</span>}
          </h3>
          <p className="sub-text">{account.accountName}</p>
          <div className="account-number">
            {account.accountNumber}
            {/* If we had currency logic, maybe show it here or separately */}
            <span className="copy-icon" style={{ color: '#cbd5e1', cursor: 'pointer', fontSize: '12px', marginLeft: '6px' }}>NOTES</span>
          </div>
          <div className="status-line">
            <div className="verified-dot"></div>
            <span className="verified-text">Verified</span>
            <span>• {account.currency || "NGN"} Settlement</span>
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
        🏛️
      </div>
    </div>
  );
};

export default AccountCard;