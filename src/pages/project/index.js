"use client";
import React, { useState } from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
import { FaTwitter, FaSlack, FaGithub, FaDribbble } from "react-icons/fa";
import Image from "next/image";
// import { NavBar } from "@/Component/Nav/styles";
import { Bounce, Fade } from "react-swift-reveal";

import Slider from "../../../Component copy/Menu/page";
import Nav from "../../../Component copy/Nav/Index";
import Footer from "../../../Component copy/Footer/Index";
import { useTheme } from "../ThemeContext";

const Index = () => {
  const { isDarkMode, setDarkMode } = useTheme();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Fade duration={500} distance="30px" delay={500}>
      <Wrapper
        style={{
          background: isDarkMode ? "#020A13" : "#ffff",
          color: isDarkMode ? "#ffff" : "#020A13",
        }}
      >
        <aside>
          <Nav />

          <Slider isOpen={isSidebarOpen} onClose={toggleMenu} />
        </aside>

        <div
          className="header"
          style={{
            background: isDarkMode ? "#020A13" : "#ffff",
            color: isDarkMode ? "#EBF4F6" : "#020A13",
          }}
        >
          <div className="header__txt">
            <div className="header__txt__box">
              <h1
                style={{
                  background: isDarkMode ? "#020A13" : "#ffff",
                  color: isDarkMode ? "#EBF4F6" : "#020A13",
                }}
              >
                My Projects{" "}
              </h1>
              <p
                className="txt"
                style={{
                  background: isDarkMode ? "#020A13" : "#ffff",
                  color: isDarkMode ? "#EBF4F6" : "#020A13",
                }}
              >
                I am a passionate and dedicated product designer with a keen eye
                for detail and the ability to craft extraordinary user
                experiences.
              </p>
              <p
                className="txt"
                style={{
                  background: isDarkMode ? "#020A13" : "#ffff",
                  color: isDarkMode ? "#EBF4F6" : "#020A13",
                }}
              >
                With years of experience in the industry, I have honed my skills
                to create designs that meet client&apos;s needs and exceed their
                expectations.
              </p>
              <Bounce>
                <div className="icon">
                  <Link className="links" href="#">
                    <FaTwitter />
                  </Link>
                  <Link className="links" href="#">
                    <FaGithub />
                  </Link>
                  <Link className="links" href="#">
                    <FaDribbble />
                  </Link>
                  <Link className="links" href="#">
                    <FaSlack />
                  </Link>
                </div>
              </Bounce>
            </div>
            <div>
              <p className="txt-big">Projects</p>
            </div>
          </div>
          <div className="header__img">
            <Image
              src="/photo.png"
              alt="photos"
              width={420}
              height={420}
              className="photo__1"
            />
          </div>
        </div>
        <div
          className="header__ux "
          style={{
            background: isDarkMode ? "#020D1A" : "#EBF4F6",
            color: isDarkMode ? "#ffff" : "#020A13",
          }}
        >
          <h1 className="header__ux__head ">Latest Project </h1>
          <p className="header__ux__txt">
            And if it’s not listed here, I learn incredibly quickly
          </p>
          <div className="container  ">
            <Link href="/project/Nexter">
              <div className="box !bg-white">
                <Image
                  src="/ux-prj-1.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Nester Verify</p>
                <p className="txt">Website · UI/UX Design</p>
              </div>
            </Link>
            <Link href="/project/Kita">
              <div className="box !bg-white">
                <Image
                  src="/ux-prj-2.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Kita Folk </p>
                <p className="txt">Web Application - UI/UX Design/ Branding</p>
              </div>
            </Link>
            <Link href="/project/Famhub360">
              <div className="box !bg-white">
                <Image
                  src="/ux-prj-3.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Farmhub360</p>
                <p className="txt">
                  Website · UI/UX Design/ Pitchdeck/ Branding
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className=" header__ux ">
          <h1 className="header__ux__head">UI/UX Design Projects</h1>
          <p className="header__ux__txt">
            And if it’s not listed here, I learn incredibly quickly
          </p>
          <div className="container grid">
            <Link href="/project/StackIam">
              <div className="box !bg-blue-950">
                <Image
                  src="/stack-1.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">StackIAM </p>
                <p className="txt  !text-gray-300 !pb-24">
                  Website · UI/UX Design
                </p>
              </div>
            </Link>
            <Link href="/project/StackwalkerLLc">
              <div className="box !bg-blue-950">
                <Image
                  src="/stack-2.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">Stackwalker </p>
                <p className="txt !text-gray-300 !pb-24">
                  Website · UI/UX Design
                </p>
              </div>
            </Link>
            <Link href="/project/Lotus">
              <div className="box !bg-blue-950">
                <Image
                  src="/locus.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">Lotus Capital App</p>
                <p className="txt !text-gray-300 !pb-24">
                  Mobile Application - UI/UX Design
                </p>
              </div>
            </Link>

            <Link href="#">
              <div className="box !bg-blue-950">
                <Image
                  src="/muh.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">Muhasaba Mobile</p>
                <p className="txt  !text-gray-300 !pb-24">
                  Mobile Application - UI/UX Design
                </p>
              </div>
            </Link>
            <Link href="#">
              <div className="box !bg-blue-950">
                <Image
                  src="/office.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">OfficeAjo</p>
                <p className="txt !text-gray-300 !pb-24">
                  Website - UI/UX Design
                </p>
              </div>
            </Link>
            <Link href="#">
              <div className="box !bg-blue-950">
                <Image
                  src="/flite.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">Flitwire</p>
                <p className="txt !text-gray-300 !pb-24">
                  Website - UI/UX Design
                </p>
              </div>
            </Link>

            <Link href="#">
              <div className="box !bg-blue-950">
                <Image
                  src="/vapo.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">Vapo Travels </p>
                <p className="txt  !text-gray-300 !pb-24">
                  Website / Mobile- UI/UX Design{" "}
                </p>
              </div>
            </Link>
            <Link href="#">
              <div className="box !bg-blue-950">
                <Image
                  src="/luc.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">Lumière Couture Website</p>
                <p className="txt !text-gray-300 !pb-24">
                  Website - UI/UX Design
                </p>
              </div>
            </Link>
            <Link href="#">
              <div className="box !bg-blue-950">
                <Image
                  src="/loc-2.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title !text-gray-300">Lumière Couture Website</p>
                <p className="txt !text-gray-300 !pb-24">
                  Website - UI/UX Design
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className=" header__ux ">
          <h1 className="header__ux__head">Brand Identity Projects</h1>
          <p className="header__ux__txt">
            And if it’s not listed here, I learn incredibly quickly
          </p>
          <div className="container">
            <Link href="/project/Stackwalker">
              <div className="box">
                <Image
                  src="/ux-prj-4.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Stackwalker LLC</p>
                <p className="txt">The Brand Identity Designn</p>
              </div>
            </Link>
            <Link href="/project/FindWorker">
              <div className="box">
                <Image
                  src="/ux-prj-5.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Findworker </p>
                <p className="txt">The Pitch-deck Design</p>
              </div>
            </Link>
            <Link href="/project/Farmhub360-pitch">
              <div className="box">
                <Image
                  src="/ux-prj-6.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Farmhub360</p>
                <p className="txt">The Pitch-deck Design</p>
              </div>
            </Link>
            <Link href="/project/Zeedas">
              <div className="box">
                <Image
                  src="/llc.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Zeedas Presentation</p>
                <p className="txt">The Brand Identity Designn</p>
              </div>
            </Link>
            <Link href="/project/PCPMC">
              <div className="box">
                <Image
                  src="/pcmc.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">PCPMC </p>
                <p className="txt">The Brand Identity Designn</p>
              </div>
            </Link>
            <Link href="/project/KitaFolk">
              <div className="box">
                <Image
                  src="/kita.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Kita Folk </p>
                <p className="txt">The Brand Identity Designn</p>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </Wrapper>
    </Fade>
  );
};

export default Index;
