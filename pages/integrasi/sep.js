// pages/integrasi/sep.js
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function ModulSEP() {
  const [form, setForm] = useState({
    noKartu: '',
    tglPelayanan: '',
    poliTujuan: '',
    diagnosaAwal: '',
    jenisPelayanan: '',
    noRujukan: ''
  });

  const [hasil, setHasil] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Panggil API VClaim BPJS untuk generate SEP
    console.log('Data dikirim:', form);
    setHasil(form); // Dummy output
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Modul SEP - BPJS VClaim</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input type="text" name="noKartu" placeholder="Nomor Kartu BPJS" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="date" name="tglPelayanan" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="poliTujuan" placeholder="Poli Tujuan" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="diagnosaAwal" placeholder="Diagnosa Awal" onChange={handleChange} className="w-full border p-2 rounded" />
        <select name="jenisPelayanan" onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Pilih Jenis Pelayanan</option>
          <option value="1">Rawat Inap</option>
          <option value="2">Rawat Jalan</option>
        </select>
        <input type="text" name="noRujukan" placeholder="Nomor Rujukan (jika ada)" onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Generate SEP</button>
      </form>

      {hasil && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="font-semibold">Data yang Dikirim:</h2>
          <pre>{JSON.stringify(hasil, null, 2)}</pre>
        </div>
      )}
    </Layout>
  );
}
