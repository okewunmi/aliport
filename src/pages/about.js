"use client";
import React, { useState } from "react";
import { Wrapper } from "../styles/about";
import { NavBar } from "../../Component copy/Nav/styles";
import Nav from "../../Component copy/Nav/Index";
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
import { GrSchedules } from "react-icons/gr";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { Fade } from "react-swift-reveal";
import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Slider from "../../Component copy/Menu/page";
import Footer from "../../Component copy/Footer/Index";
import { useTheme } from "./ThemeContext";

const Index = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // const toggleDarkMode = () => {
  //   setDarkMode((prev) => !prev);
  // };

  return (
    <Fade duration={500} distance="30px" delay={500}>
      <Wrapper>
        <Nav />
        <aside>
          {/* <NavBar style={{background:darkMode? "#020A13":"#EBF4F6", color:darkMode? '#ffff': "#171F38"}} >  
            <div className='NavBar__link' >
                <Link className='links' href="/contact">Contact Me</Link>
                <Link className='links' href="/project">Projects</Link>
                <Link className='links' href="/process">Process</Link>
                <Link className='links' href="/about">About Me</Link> 
            </div>
            <div>
                <div className='NavBar__btn'>
                <Link className='NavBar__btn--btn' href="#">Download Resume</Link>
                <buton className='btn' onClick={toggleDarkMode}> <WiMoonAltFirstQuarter/> </buton>
                <buton className='btn btn-menu' onClick={toggleMenu}>  <HiOutlineMenuAlt4 className='menu'/> </buton>
                </div>
            </div>
        </NavBar> */}
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
            <h3 className="h3">About Me.</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item flex">
              <div>
                <div className="head">
                  {" "}
                  <h4 className="h4 timeline-item-title">
                    Oseni Ali - UI/UX Designer
                  </h4>
                </div>

                <p className="timeline-text text-1">
                  Greetings! I&apos; m Oseni Ali, a passionate UI/UX designer
                  dedicated to crafting seamless and engaging digital
                  experiences. With a keen eye for aesthetics and a user-centric
                  approach, I specialize in translating complex ideas into
                  intuitive and visually appealing designs. My journey involves
                  a blend of creative thinking, problem-solving, and staying at
                  the forefront of design trends. Here&apos;s what defines me:
                </p>
              </div>
              <div className="QR">
                <Link className="link" href="#">
                  Linkedin QR Code
                </Link>
                <Image
                  src="/QR.png"
                  width={180}
                  height={100}
                  alt="qr"
                  className="qr__image"
                />
                <Link className="link" href="#">
                  View Dribbble
                </Link>
              </div>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Innovative Design</h4>
              </div>

              {/* <span>Feb, 2022</span> */}

              <p className="timeline-text">
                In my design approach, innovation is more than a buzzword –
                it&apos;s a commitment to pushing creative boundaries. I thrive
                on exploring new possibilities, crafting designs that not only
                meet the functional needs of users but go above and beyond,
                leaving a lasting impression and exceeding expectations.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">User-Centric Approach</h4>

              {/* <span>2019 — 2021</span> */}

              <p className="timeline-text">
                At the heart of my design philosophy is a profound understanding
                of the end-user. I see every pixel as an opportunity to enhance
                the user experience. Through meticulous research and empathetic
                design thinking, I ensure that every element serves a purpose,
                contributing to an intuitive and optimal journey for the user.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Tech Enthusiast</h4>

              {/* <span>2002 — 2004</span> */}

              <p className="timeline-text">
                As a tech enthusiast, I embrace the dynamic landscape of the
                digital world. I stay at the forefront of emerging technologies,
                integrating cutting-edge solutions seamlessly into my designs.
                This tech-forward mindset ensures that my work not only meets
                contemporary standards but also resonates with the tech-savvy
                expectations of modern audiences.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Collaborative Spirit</h4>
              </div>
              <p className="timeline-text">
                Design doesn&apos;t happen in isolation. I firmly believe in the
                power of collaboration. Working seamlessly with cross-functional
                teams is integral to my process. By fostering open communication
                and embracing diverse perspectives, I ensure that the design
                journey is not only smooth but also aligned with the overarching
                goals of the project.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Portfolio Highlights</h4>
              </div>
              <p className="timeline-text">
                Explore my portfolio, and you&rsquo;ll discover a diverse
                tapestry of projects that showcase not just my technical skills
                but my versatility, attention to detail, and the ability to
                deliver designs with a profound impact. Each project is a
                testament to my dedication to excellence and my capacity to
                adapt to varied design challenges.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Portfolio Highlights</h4>
              </div>

              {/* <span>Feb, 2022</span> */}

              <p className="timeline-text">
                Explore my portfolio, and you&apos;ll discover a diverse
                tapestry of projects that showcase not just my technical skills
                but my versatility, attention to detail, and the ability to
                deliver designs with a profound impact. Each project is a
                testament to my dedication to excellence and my capacity to
                adapt to varied design challenges.
              </p>
            </li>
          </ol>

          <h2 className="sub">My Reads.</h2>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Dont Make Me Think</h4>

              <p className="timeline-text">
                By Steve Krug is a seminal guide to web usability. In this
                succinct and witty exploration, Krug emphasizes simplicity in
                web design, arguing that a user&apos;s interaction with a
                website should be intuitive and require minimal cognitive
                effort. He delves into the principles of navigation, clarity,
                and the elimination of unnecessary complexities. Krug&apos;s
                mantra, &ldquo;Don&apos;t make me think,&ldquo; encapsulates the
                user&apos;s desire for a seamless, instinctive online
                experience. Through real-world examples and practical advice,
                the book serves as a foundational resource for designers, urging
                them to prioritize user-centric design and create interfaces
                that effortlessly guide users through their digital journey.
              </p>
            </li>
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">
                  The Design of Everyday Things
                </h4>
              </div>

              <p className="timeline-text">
                By Don Norman explores the principles of user-centered design.
                Norman delves into the psychology behind interactions with
                everyday objects, illustrating how good design enhances
                usability and user satisfaction. He introduces concepts like
                affordances and signifiers, emphasizing the importance of
                intuitive and understandable design. Norman critiques poorly
                designed products, highlighting the consequences of bad design
                on user experience. This influential work encourages designers
                to prioritize user needs, providing insights into creating
                products that seamlessly integrate with human behavior,
                ultimately leading to products that are not just functional but
                also a joy to use.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Designing for Emotion</h4>
              <p className="timeline-text">
                Emphasizes the profound impact emotional design has on user
                engagement. Recognizing that user experiences are inherently
                emotional, the book guides designers in creating products that
                resonate with users on a deeper level. Aarron Walter explores
                how empathy, storytelling, and thoughtful interactions foster
                connections. By understanding users&apos; emotional states,
                designers can craft interfaces that delight and build lasting
                relationships. Walter&apos;s insights underscore the pivotal
                role of emotions in user experience, urging designers to go
                beyond functionality and infuse designs with empathy, ultimately
                creating memorable and meaningful interactions for users.
              </p>
            </li>
          </ol>
          <h2 className="sub">Lets Talk</h2>
          <ol className="timeline-list">
            <li className="timeline-item">
              <div className="head">
                <h4 className="h4 timeline-item-title">Dont Make Me Think</h4>
                <div className="date">
                  <GrSchedules />
                  <h5>Currently</h5>
                </div>
              </div>

              <p className="timeline-text">
                I invite you to join me on a journey where creativity seamlessly
                meets functionality. Your vision is the compass, and my
                expertise is the map. Together, let&apos;s transcend the
                ordinary and create something extraordinary that not only meets
                objectives but elevates the user experience to new heights.
              </p>
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
