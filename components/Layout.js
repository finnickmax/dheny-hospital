// components/Layout.js
export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#0d47a1', color: 'white', padding: '1rem' }}>
        <h1>Dheny Hospital SIMRS</h1>
        <nav style={{ marginTop: '0.5rem' }}>
          <a href="/" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
          <a href="/login" style={{ color: 'white', marginRight: '1rem' }}>Login</a>
          <a href="/dashboard" style={{ color: 'white' }}>Dashboard</a>
        </nav>
      </header>
      <main style={{ padding: '2rem' }}>{children}</main>
    </div>
  );
}

