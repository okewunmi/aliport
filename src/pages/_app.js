import { Inter, Abril_Fatface, Nunito_Sans } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "../ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const abril_Fatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril-Fatface",
  display: "swap",
});

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito-Sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}
            ${abril_Fatface.style.fontFamily} ${nunito_Sans.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>

    // <html lang="en">
    //   <body
    //     className={`${inter.variable} ${abril_Fatface.variable} ${nunito_Sans.variable}`}
    //   >
    //     <ThemeProvider>
    //       <Component {...pageProps} />
    //     </ThemeProvider>
    //   </body>
    // </html>

    // <ThemeProvider>
    //   <Component {...pageProps} />
    // </ThemeProvider>
  );
}
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <style jsx global>{`
//         html {
//           font-family: ${inter.style.fontFamily};
//         }
//       `}</style>
//       <Component {...pageProps} />
//     </>
//   )
// }
