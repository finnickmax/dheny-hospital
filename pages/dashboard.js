export default function Dashboard() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard SIMRS - Dheny Hospital</h1>
      <p>Selamat datang, Admin!</p>

      <h3>📋 Statistik:</h3>
      <ul>
        <li>🔹 Total Pasien: 120</li>
        <li>🔹 Rawat Jalan Hari Ini: 18</li>
        <li>🔹 Pendaftaran BPJS Aktif: 85</li>
      </ul>

      <h3>📁 Modul:</h3>
      <ul>
        <li><a href="/pendaftaran">📝 Pendaftaran Pasien</a></li>
        <li><a href="/rawatjalan">💊 Rawat Jalan</a></li>
        <li><a href="/integrasi">🔗 Integrasi BPJS/SATUSEHAT</a></li>
      </ul>
    </div>
  );
}
