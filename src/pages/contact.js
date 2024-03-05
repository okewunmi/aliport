"use client";
import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Wrapper } from "../../Component copy/Header/styles";
import { NavBar } from "../../Component copy/Nav/styles";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import Link from "next/link";
import { FaTwitter, FaSlack, FaGithub, FaDribbble } from "react-icons/fa";
// import { Content } from "@/Component/Footer/styles";

import Image from "next/image";
import { Fade } from "react-swift-reveal";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Slider from "../../Component copy/Menu/page";
import Nav from "../../Component copy/Nav/Index";
import Footer from "../../Component copy/Footer/Index";

const Page = () => {
  const { isDarkMode, setDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <Fade duration={500} distance="30px" delay={500}>
      <Wrapper
        style={{
          background: isDarkMode ? "#031529" : "#EBF4F6",
          color: isDarkMode ? "#ffff" : "#020A13",
        }}
      >
        <Nav />
        <aside>
          <Slider isOpen={isSidebarOpen} onClose={toggleMenu} />
        </aside>
        <div
          className="header__work mt-32"
          style={{
            background: isDarkMode ? "#031529" : "#EBF4F6",
            color: isDarkMode ? "#ffff" : "#020A13",
          }}
        >
          <h1
            className="header__bring__head"
            style={{ color: isDarkMode ? "#ffff" : "#020A13" }}
          >
            Want to work with me?
          </h1>
          <p
            className="header__bring__txt "
            style={{ color: isDarkMode ? "#ffff" : "#020A13" }}
          >
            Cool! Let’s talk about your project
          </p>
          <form>
            <div className="form-box">
              <label>Your Name</label>
              <div className="form-icon">
                <div
                  className="icons"
                  style={{ color: isDarkMode ? "#000" : "#020A13" }}
                >
                  {" "}
                  <IoPersonCircle className="icon" />
                </div>

                <input
                  type="text"
                  className="input"
                  placeholder="e.g. Bonnie Green"
                  style={{
                    background: isDarkMode ? "#ffff" : "#ffff",
                    color: isDarkMode ? "#020A13" : "#020A13",
                  }}
                />
              </div>
            </div>
            <div className="form-box">
              <label>Your Email</label>
              <div className="form-icon">
                <div
                  className="icons"
                  style={{ color: isDarkMode ? "#000" : "#020A13" }}
                >
                  <IoIosMail className="icon" />
                </div>

                <input
                  type="text"
                  className="input"
                  placeholder="example@company.com"
                  style={{
                    background: isDarkMode ? "#ffff" : "#ffff",
                    color: isDarkMode ? "#020A13" : "#020A13",
                  }}
                />
              </div>
            </div>

            <div className="form-box">
              <label>Your Message</label>
              <div className="form-icon">
                <textarea
                  className=""
                  placeholder="Your message"
                  style={{
                    background: isDarkMode ? "#ffff" : "#ffff",
                    color: isDarkMode ? "#020A13" : "#020A13",
                  }}
                />
              </div>
            </div>
            <button className="send__btn"> Send message</button>
          </form>
        </div>

        <Footer />
      </Wrapper>
    </Fade>
  );
};

export default Page;
