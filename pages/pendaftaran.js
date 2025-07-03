import Layout from '@/components/Layout'
import PatientForm from '@/components/PatientForm'
import PatientList from '@/components/PatientList'
import { useState } from 'react'

export default function Pendaftaran() {
  const [patients, setPatients] = useState([])

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient])
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Pendaftaran Pasien Baru</h1>
        <PatientForm onAdd={handleAddPatient} />
        <h2 className="text-xl font-semibold mt-8 mb-2">Daftar Pasien</h2>
        <PatientList patients={patients} />
      </div>
    </Layout>
  )
}
