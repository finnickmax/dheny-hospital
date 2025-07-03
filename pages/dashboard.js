import Layout from '../components/Layout';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard Utama - Dheny Hospital SIMRS</h1>
      <p>Selamat datang di halaman dashboard. Pilih modul di bawah:</p>
      <ul>
        <li><Link href="/pendaftaran">Modul Pendaftaran</Link></li>
        <li><Link href="/rawatjalan">Modul Rawat Jalan</Link></li>
        <li><Link href="/rawat-inap">Modul Rawat Inap</Link></li>
        <li><Link href="/integrasi">Integrasi BPJS & SATUSEHAT</Link></li>
        <li><Link href="/integrasi/sep">➤ Modul SEP (BPJS VClaim)</Link></li>
      </ul>
    </Layout>
  );
}

