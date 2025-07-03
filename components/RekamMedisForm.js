import { useState } from 'react';

export default function RekamMedisForm() {
  const [formData, setFormData] = useState({
    nama: '',
    keluhan: '',
    diagnosa: '',
    terapi: '',
    tanggal: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data rekam medis:', formData);
    // Simpan ke backend atau localStorage
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nama" placeholder="Nama Pasien" onChange={handleChange} className="border p-2" />
        <input type="date" name="tanggal" onChange={handleChange} className="border p-2" />
        <input name="keluhan" placeholder="Keluhan" onChange={handleChange} className="border p-2" />
        <input name="diagnosa" placeholder="Diagnosa" onChange={handleChange} className="border p-2" />
        <input name="terapi" placeholder="Terapi/Obat" onChange={handleChange} className="border p-2" />
      </div>
      <button type="submit" className="bg-blue-600 text-white mt-4 px-4 py-2 rounded">Simpan</button>
    </form>
  );
}
