import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      
      {/* Sidebar */}
      <div>
        <h2>Dashboard Menu</h2>
        <ul>
          <li><Link href="/dashboard">Home</Link></li>
          <li><Link href="/dashboard/analytics">Analytics</Link></li>
          <li><Link href="/dashboard/settings">Settings</Link></li>
        </ul>
      </div>

      {/* Page Content */}
      <div>
        {children}
      </div>
      
    </div>
  );
}