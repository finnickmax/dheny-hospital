// pages/_app.js
import { PatientProvider } from '@/context/PatientContext';
import { InpatientProvider } from '@/context/InpatientContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <PatientProvider>
      <InpatientProvider>
        <Component {...pageProps} />
      </InpatientProvider>
    </PatientProvider>
  );
}
