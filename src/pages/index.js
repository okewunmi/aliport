import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "../../Component copy//Header/index";
import Nav from "../../Component copy/Nav/Index";
import Footer from "../../Component copy/Footer/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <Header />
      <Footer />
    </>
  );
}
