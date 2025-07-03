// pages/_app.js
import { InpatientProvider } from '@/context/InpatientContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <InpatientProvider>
      <Component {...pageProps} />
    </InpatientProvider>
  );
}

export default MyApp;
