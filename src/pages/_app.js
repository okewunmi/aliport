import "@/styles/globals.css";
import { ThemeProvider } from "../pages/ThemeContext";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
