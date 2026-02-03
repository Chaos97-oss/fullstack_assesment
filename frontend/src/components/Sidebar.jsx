const Sidebar = () => {
    return (
    <aside className="sidebar">
    <h2 className="logo">VitalSwap</h2>
    <nav>
        <p className="menu-title">MAIN MENU</p>
        <a>Dashboard</a>
        <a>Transactions</a>
        <a>Accounts</a>
        <a>Payment Link</a>

            <p className="menu-title">CONFIGURATION</p>
        <a className="active">Settlement Accounts</a>
        <a>Security</a>
        <a>Webhooks</a>
        <a>API Docs</a>
        </nav>
    </aside>
    );
};
    export default Sidebar;
