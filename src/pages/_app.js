import '../styles/globals.css';
import { GlobalProvider } from '../pages/context/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
