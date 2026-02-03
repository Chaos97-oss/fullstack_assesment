const InfoBanner = () => {
  return (
    <div className="info-banner">
      <div className="info-icon">
        <i className="fas fa-info-circle"></i>{/* Assuming FontAwesome or similar, or just text 'i' */}
        ℹ️
      </div>
      <div className="info-banner-content">
        <h4>About Settlement Accounts</h4>
        <p>
          Settlement accounts are external bank accounts where you receive payouts
          from your wallet. Ensure the account name matches your registered
          business name to avoid delays. Changes to settlement accounts may require additional verification.
        </p>
      </div>
    </div>
  );
};

export default InfoBanner;
