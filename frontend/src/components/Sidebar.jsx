const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">⇄</div>
        <h2 className="logo-text">VitalSwap</h2>
      </div>

      <nav className="sidebar-nav">
        <div className="menu-group">
          <p className="menu-title">MAIN MENU</p>

          <button className="nav-item">
            <span className="icon">⊞</span> Dashboard
          </button>

          <button className="nav-item">
            <span className="icon">📄</span> Transactions
          </button>

          <button className="nav-item">
            <span className="icon">🏛</span> Accounts
          </button>

          <button className="nav-item">
            <span className="icon">🔗</span> Payment Link
          </button>
        </div>

        <div className="menu-group">
          <p className="menu-title">CONFIGURATION</p>

          <div className="nav-item has-submenu expanded">
            <div className="submenu-header">
              <span className="icon">⚙️</span> Settings
              <span className="arrow">^</span>
            </div>

            <div className="submenu-items">
              <button className="submenu-item">General</button>
              <button className="submenu-item">Profile & Team</button>
              <button className="submenu-item active">Settlement Accounts</button>
              <button className="submenu-item">Security</button>
            </div>
          </div>

          <button className="nav-item">
            <span className="icon">⚡</span> Webhooks
          </button>

          <button className="nav-item">
            <span className="icon">🛡</span> Due Diligence
          </button>

          <button className="nav-item">
            <span className="icon">﹤﹥</span> API Docs
          </button>
        </div>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item logout">
          <span className="icon">←</span> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;