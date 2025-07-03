export default function Dashboard() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard Utama - Dheny Hospital SIMRS</h1>
      <p>Selamat datang di halaman dashboard. Pilih modul di bawah:</p>
      <ul>
        <li><a href="/pendaftaran">Modul Pendaftaran</a></li>
        <li><a href="/rawatjalan">Modul Rawat Jalan</a></li>
        <li><a href="/integrasi">Integrasi BPJS & SATUSEHAT</a></li>
      </ul>
    </div>
  );
}
