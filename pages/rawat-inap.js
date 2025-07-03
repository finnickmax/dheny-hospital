// pages/rawatinap.js
import Layout from '@/components/Layout';
import InpatientForm from '@/components/InpatientForm';
import InpatientList from '@/components/InpatientList';

export default function RawatInapPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Rawat Inap</h1>
      <InpatientForm />
      <InpatientList />
    </Layout>
  );
}
