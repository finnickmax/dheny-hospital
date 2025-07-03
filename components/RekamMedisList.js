import { useState, useEffect } from 'react';

export default function RekamMedisList() {
  const [rekamMedis, setRekamMedis] = useState([]);

  useEffect(() => {
    // Simulasikan fetch data rekam medis
    const dataDummy = [
      {
        id: 1,
        nama: 'Andi',
        tanggal: '2025-07-03',
        diagnosa: 'Demam',
        keluhan: 'Panas sejak 2 hari',
        terapi: 'Paracetamol',
      },
    ];
    setRekamMedis(dataDummy);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Daftar Rekam Medis</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-2 py-1 border">Tanggal</th>
            <th className="px-2 py-1 border">Nama</th>
            <th className="px-2 py-1 border">Keluhan</th>
            <th className="px-2 py-1 border">Diagnosa</th>
            <th className="px-2 py-1 border">Terapi</th>
          </tr>
        </thead>
        <tbody>
          {rekamMedis.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1">{item.tanggal}</td>
              <td className="border px-2 py-1">{item.nama}</td>
              <td className="border px-2 py-1">{item.keluhan}</td>
              <td className="border px-2 py-1">{item.diagnosa}</td>
              <td className="border px-2 py-1">{item.terapi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
