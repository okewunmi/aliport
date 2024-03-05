"use client";
import React, { useState } from "react";
import { Wrapper } from "../styles/process";

import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Slider from "../../Component copy/Menu/page";
import Nav from "../../Component copy/Nav/Index";
import { Fade } from "react-swift-reveal";
import Footer from "../../Component copy/Footer/Index";
const Index = () => {
  const { isDarkMode } = useTheme();

  // const toggleDarkMode = () => {
  //   setDarkMode((prev) => !prev);
  // };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Fade duration={500} distance="30px" delay={500}>
      <Wrapper>
        <aside>
          <Nav />

          <Slider isOpen={isSidebarOpen} onClose={toggleMenu} />
        </aside>

        <section
          className="timeline"
          style={{
            background: isDarkMode ? "#020A13" : "#ffff",
            color: isDarkMode ? "#ffff" : "#171F38",
          }}
        >
          {/* <section className="timeline"  > */}
          <div className="title-wrapper">
            <h3 className="h3">Design Process</h3>
          </div>

          <ol className="timeline-list">
            <li className={isDarkMode ? "timeline-item-dark" : "timeline-item"}>
              <h4 className="h4 timeline-item-title">
                The UI/UX design process is a structured approach that UI/UX
                designers follow to create user-friendly and visually appealing
                interfaces. Here &apos;s a breakdown of the key steps and their
                explanations
              </h4>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Research</h4>
              </div>
              <p className="timeline-text">
                User Research: Understand the target audience, their behaviors,
                needs, and pain points through surveys, interviews, and user
                personas.
              </p>
              <p className="timeline-text">
                Competitor Analysis: Analyze competitors to identify industry
                trends and design opportunities.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Information Architecture
              </h4>

              <p className="timeline-text">
                Organize the content and layout of the product, ensuring logical
                navigation and a clear hierarchy.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Wireframing</h4>
              <p className="timeline-text">
                Create low-fidelity wireframes to outline the layout, structure,
                and functionality of the interface without detailing design
                elements.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Prototyping</h4>
              </div>
              <p className="timeline-text">
                Develop interactive prototypes that simulate user interactions
                and workflows. This helps visualize the user journey and test
                usability.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Visual Design</h4>
              </div>
              <p className="timeline-text">
                Craft the visual elements, including color schemes, typography,
                icons, and imagery, maintaining brand consistency.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Usability Testing</h4>
              </div>
              <p className="timeline-text">
                Conduct user testing to evaluate the design&apos;s
                effectiveness, identify pain points, and gather feedback for
                improvements.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Interaction Design</h4>
              </div>
              <p className="timeline-text">
                Conduct user testing to evaluate the design&apos;s
                effectiveness, identify pain points, and gather feedback for
                improvements.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  Development Collaboration
                </h4>
              </div>
              <p className="timeline-text">
                Work closely with developers to ensure the design is implemented
                accurately and that all functionalities work as intended.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Responsive Design</h4>
              </div>
              <p className="timeline-text">
                Ensure the design is responsive, adapting seamlessly to
                different screen sizes and devices
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Accessibility</h4>
              </div>
              <p className="timeline-text">
                Ensure that the design adheres to accessibility standards (e.g.,
                WCAG) to make it usable by individuals with disabilities.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  Quality Assurance (QA)
                </h4>
              </div>
              <p className="timeline-text">
                Collaborate with QA testers to identify and address
                design-related issues, ensuring the product functions as
                expected.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  User Interface Testing
                </h4>
              </div>
              <p className="timeline-text">
                Perform UI testing to verify that the design is pixel-perfect
                and matches the intended visual representation.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Documentation</h4>
              </div>
              <p className="timeline-text">
                Create comprehensive documentation for design elements,
                guidelines, and assets for developers and stakeholders.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  Feedback and Iteration
                </h4>
              </div>
              <p className="timeline-text">
                Continuously iterate on the design based on user feedback, data
                analysis, and changing project requirements. Design is an
                ongoing process.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  Launch and Deployment
                </h4>
              </div>
              <p className="timeline-text">
                Once the design is finalized and tested, deploy it on the
                intended platform. Monitor its performance and gather
                post-launch feedback
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  Post-Launch Analysis:
                </h4>
              </div>
              <p className="timeline-text">
                Evaluate the design&apos;s success based on predefined metrics
                and key performance indicators. Identify areas for improvement
                in future iterations.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  The UI/UX design process is dynamic and iterative, with a
                  strong focus on user needs and continuous improvement. Each
                  project may involve variations in these steps, depending on
                  the scope and goals, but we following this general process to
                  helps us ensure a well-rounded design outcome.
                </h4>
              </div>
              {/* <p className="timeline-text">
                Evaluate the design's success based on predefined metrics and key performance indicators. Identify areas for improvement in future iterations.
                </p> */}
            </li>
          </ol>

          {/* <div className="social">
            <div className="social__icon">
              <p>Lets Continue To Projects </p>{" "}
              <span>
                <BsArrowRight />
              </span>
            </div> */}

          {/* <div className="social__icon--box">
              <Link className="links" href="#">
                {" "}
                <FaTwitter />
              </Link>
              <Link className="links" href="#">
                <FaFacebookF />
              </Link>
              <Link className="links" href="#">
                <FaLinkedinIn />
              </Link>
              <Link className="links" href="#">
                <FaGithub />
              </Link>
              <Link className="links" href="#">
                {" "}
                <FaDribbble />
              </Link>
              <Link className="links" href="#">
                <FaInstagram />
              </Link>
            </div> */}
          {/* </div> */}
        </section>

        <Footer />
      </Wrapper>
    </Fade>
  );
};

export default Index;
