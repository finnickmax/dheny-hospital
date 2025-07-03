export default function PatientList({ patients }) {
  if (patients.length === 0) return <p>Belum ada pasien.</p>

  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Nama</th>
          <th className="border p-2">NIK</th>
          <th className="border p-2">Tgl Lahir</th>
          <th className="border p-2">JK</th>
          <th className="border p-2">Alamat</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p, i) => (
          <tr key={i}>
            <td className="border p-2">{p.nama}</td>
            <td className="border p-2">{p.nik}</td>
            <td className="border p-2">{p.tanggalLahir}</td>
            <td className="border p-2">{p.jenisKelamin}</td>
            <td className="border p-2">{p.alamat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
