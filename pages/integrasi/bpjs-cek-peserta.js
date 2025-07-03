// pages/integrasi/bpjs-cek-peserta.js
import { useState } from 'react';
import Layout from '@/components/Layout';

export default function CekPesertaBPJS() {
  const [noKartu, setNoKartu] = useState('');
  const [hasil, setHasil] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulasi respons BPJS (karena belum pakai token & endpoint real)
    const mockData = {
      nama: "Budi Santoso",
      nik: "3271010101010001",
      noKartu: noKartu,
      status: "Aktif",
      jenisPeserta: "Pekerja Penerima Upah",
      faskes: "Klinik Sehat Jaya",
    };

    setHasil(mockData);
  };

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">Cek Kepesertaan BPJS</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Masukkan Nomor Kartu BPJS"
          value={noKartu}
          onChange={(e) => setNoKartu(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Cek Peserta
        </button>
      </form>

      {hasil && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Hasil:</h2>
          <p><strong>Nama:</strong> {hasil.nama}</p>
          <p><strong>NIK:</strong> {hasil.nik}</p>
          <p><strong>No. Kartu:</strong> {hasil.noKartu}</p>
          <p><strong>Status:</strong> {hasil.status}</p>
          <p><strong>Jenis Peserta:</strong> {hasil.jenisPeserta}</p>
          <p><strong>Faskes:</strong> {hasil.faskes}</p>
        </div>
      )}
    </Layout>
  );
}
