import "../styles/globals.css";
import { GlobalProvider } from "../pages/context/GlobalState";
import { AuthProvider } from "../pages/context/AuthContect"; 

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </AuthProvider>
  );
}
