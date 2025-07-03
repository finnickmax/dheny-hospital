// components/InpatientList.js

import { useContext } from 'react';
import { InpatientContext } from '@/context/InpatientContext';

export default function InpatientList() {
  const { inpatients, patients } = useContext(InpatientContext);

  const getPatientName = (id) => {
    const patient = patients.find((p) => p.id == id);
    return patient ? patient.name : 'Tidak diketahui';
  };

  return (
    <div className="mt-6 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Daftar Rawat Inap</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nama Pasien</th>
            <th className="border p-2">Tanggal Masuk</th>
            <th className="border p-2">Kamar</th>
            <th className="border p-2">Diagnosa</th>
            <th className="border p-2">Catatan</th>
          </tr>
        </thead>
        <tbody>
          {inpatients.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{getPatientName(item.patientId)}</td>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.room}</td>
              <td className="border p-2">{item.diagnosis}</td>
              <td className="border p-2">{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
