import { useState, useContext } from 'react';
import { InpatientContext } from '@/context/InpatientContext';

export default function InpatientForm() {
  const { patients, addInpatient } = useContext(InpatientContext);

  const [form, setForm] = useState({
    patientId: '',
    room: '',
    diagnosis: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInpatient(form);
    setForm({ patientId: '', room: '', diagnosis: '', date: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Form Rawat Inap</h2>
      <select name="patientId" value={form.patientId} onChange={handleChange} className="w-full border p-2 rounded">
        <option value="">Pilih Pasien</option>
        {patients?.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="text" name="room" placeholder="No. Kamar" value={form.room} onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="text" name="diagnosis" placeholder="Diagnosa Awal" value={form.diagnosis} onChange={handleChange} className="w-full border p-2 rounded" />
      <textarea name="notes" placeholder="Catatan Tambahan" value={form.notes} onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Simpan</button>
    </form>
  );
}

