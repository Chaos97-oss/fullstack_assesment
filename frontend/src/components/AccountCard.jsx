const AccountCard = ({ account }) => {
  return (
    <div className="account-card">
      <div className="left">
        <h4>
          {account.bankName}
          {account.isPrimary && <span className="badge">PRIMARY</span>}
        </h4>
        <p>{account.accountName}</p>
        <p className="account-number">{account.accountNumber}</p>
        <span className="verified">● Verified · {account.currency}</span>
      </div>

      <div className="actions">
        {!account.isPrimary && <button>Set as Primary</button>}
        <button className="icon">✏️</button>
        <button className="icon">🗑️</button>
      </div>
    </div>
  );
};

export default AccountCard;