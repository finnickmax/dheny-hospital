import Layout from '@/components/Layout';
import RekamMedisList from '@/components/RekamMedisList';
import RekamMedisForm from '@/components/RekamMedisForm';

export default function RekamMedisPage() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Rekam Medis</h1>
        <RekamMedisForm />
        <RekamMedisList />
      </div>
    </Layout>
  );
}
