import { useState } from 'react'

export default function PatientForm({ onAdd }) {
  const [form, setForm] = useState({
    nama: '',
    nik: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    alamat: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(form)
    setForm({ nama: '', nik: '', tanggalLahir: '', jenisKelamin: 'Laki-laki', alamat: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="nama" value={form.nama} onChange={handleChange} placeholder="Nama Lengkap" className="border p-2 w-full" required />
      <input name="nik" value={form.nik} onChange={handleChange} placeholder="NIK" className="border p-2 w-full" required />
      <input name="tanggalLahir" type="date" value={form.tanggalLahir} onChange={handleChange} className="border p-2 w-full" required />
      <select name="jenisKelamin" value={form.jenisKelamin} onChange={handleChange} className="border p-2 w-full">
        <option>Laki-laki</option>
        <option>Perempuan</option>
      </select>
      <textarea name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat" className="border p-2 w-full" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Daftarkan</button>
    </form>
  )
}
