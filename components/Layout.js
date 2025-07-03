// File: components/Layout.js
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

// File: pages/index.js
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h2>Welcome to Dheny Hospital SIMRS Demo</h2>
      <p>This is a landing page showcasing SIMRS features including BPJS and SatuSehat integration.</p>
      <a href="/login">Try Demo Login</a>
    </Layout>
  );
}

// File: pages/login.js
import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <h2>Login Demo</h2>
      <p>Username: <strong>demo</strong></p>
      <p>Password: <strong>demo123</strong></p>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
        <input type="text" placeholder="Username" required /> <br /><br />
        <input type="password" placeholder="Password" required /> <br /><br />
        <button type="submit">Login</button>
      </form>
      <p><em>Login form hanya simulasi. Tidak ada proses autentikasi sungguhan.</em></p>
    </Layout>
  );
}

// File: pages/dashboard.js
import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <h2>Dashboard Utama - Dheny Hospital SIMRS</h2>
      <p>Selamat datang di halaman dashboard. Pilih modul di bawah:</p>
      <ul>
        <li><a href="/pendaftaran">Modul Pendaftaran</a></li>
        <li><a href="/rawatjalan">Modul Rawat Jalan</a></li>
        <li><a href="/integrasi">Integrasi BPJS & SATUSEHAT</a></li>
      </ul>
    </Layout>
  );
}

// File: pages/pendaftaran.js
import Layout from '../components/Layout';

export default function Pendaftaran() {
  return (
    <Layout>
      <h2>Modul Pendaftaran</h2>
      <p>Halaman ini merupakan simulasi tampilan pendaftaran pasien baru.</p>
    </Layout>
  );
}

// File: pages/rawatjalan.js
import Layout from '../components/Layout';

export default function RawatJalan() {
  return (
    <Layout>
      <h2>Modul Rawat Jalan</h2>
      <p>Halaman ini menunjukkan daftar pasien rawat jalan.</p>
    </Layout>
  );
}

// File: pages/integrasi.js
import Layout from '../components/Layout';

export default function Integrasi() {
  return (
    <Layout>
      <h2>Integrasi BPJS dan SATUSEHAT</h2>
      <p>Halaman ini menjelaskan simulasi integrasi data dengan sistem BPJS dan SATUSEHAT.</p>
    </Layout>
  );
}
