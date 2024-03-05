import React, { useContext } from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
import { FaTwitter, FaSlack, FaGithub, FaDribbble } from "react-icons/fa";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { useTheme } from "../../src/pages/ThemeContext";
import Nav from "../Nav/Index";
const Index = () => {
  const { isDarkMode } = useTheme();
  const sign1 = "/signature.png";
  const sign2 = "/signature-2.png";
  // const imagePath = themeMode ===  'isDarkMode' ? '/public/signature-2.png' : '/public/signature.png';
  return (
    <Wrapper
      style={{
        background: isDarkMode ? "#020A13" : "#ffff",
        color: isDarkMode ? "#ffff" : "#020A13",
      }}
    >
      <Nav />
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
              Hello, I’m<span> Oseni Ali Abayomi</span>
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

            <div className="icon">
              <Link className="links" href="#">
                <FaTwitter />
              </Link>
              <Link className="links" href="#">
                <FaGithub />
              </Link>
              <Link className="links" href="#">
                {" "}
                <FaDribbble />
              </Link>
              <Link className="links" href="#">
                <FaSlack />
              </Link>
            </div>
          </div>
          <div>
            <p className="txt-big">Portfolio</p>
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
        className="header__details"
        style={{
          background: isDarkMode ? "#020D1A" : "#EBF4F6",
          color: isDarkMode ? "#EBF4F6" : "#1C2540",
        }}
      >
        <div
          className="box"
          style={{
            background: isDarkMode ? "#020D1A" : "#EBF4F6",
            color: isDarkMode ? "#EBF4F6" : "#1C2540",
          }}
        >
          <Image
            src="/icon_1.png"
            className="image__1"
            width={50}
            height={54}
            alt="logo"
          />
          <h2
            className="heading h__1"
            style={{
              background: isDarkMode ? "#020D1A" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#1C2540",
            }}
          >
            Product Design
          </h2>
          <p
            className="txt__1 txt"
            style={{
              background: isDarkMode ? "#020D1A" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#1C2540",
            }}
          >
            I work at the intersection of design,brand, code, strategy and
            content; helping organisations bring their concepts and products to
            life… to make people’s lives better.
          </p>
        </div>
        <div
          className="box"
          style={{
            background: isDarkMode ? "#020D1A" : "#EBF4F6",
            color: isDarkMode ? "#EBF4F6" : "#1C2540",
          }}
        >
          <Image
            src="/icon-2.png"
            className="image__2"
            width={50}
            height={54}
            alt="logo"
          />
          <h2
            className="heading h__2"
            style={{
              background: isDarkMode ? "#020D1A" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#1C2540",
            }}
          >
            Prototyping
          </h2>
          <p
            className="txt__2 txt"
            style={{
              background: isDarkMode ? "#020D1A" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#1C2540",
            }}
          >
            With more than a decade of experience I tackle a broad variety of
            disciplines in the process of creating meaningful products that make
            a real difference. With carefully selected tools and skills I
            express my visions ranging from product design to the creation of
            user experience up to development and delivery.
          </p>
          <p
            className="txt__2"
            style={{
              background: isDarkMode ? "#020D1A" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#1C2540",
            }}
          >
            My distinctive strategic thinking helps me to pinpoint the holistic
            scope of a product and evolve it by adding new business ideas,
            innovations and values that meet user needs as well as business
            objectives. Besides building user flows, information architecture
            and wireframes, tailor- made interactive prototypes
          </p>
        </div>
        <div
          className="box"
          style={{
            background: isDarkMode ? "#020D1A" : "#EBF4F6",
            color: isDarkMode ? "#EBF4F6" : "#1C2540",
          }}
        >
          <Image
            src="/icon-3.png"
            className="image__3"
            width={50}
            height={54}
            alt="logo"
          />
          <h2
            className="heading h__3"
            style={{
              background: isDarkMode ? "#020D1A" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#1C2540",
            }}
          >
            Team Lead
          </h2>
          <p
            className="txt__3 txt"
            style={{
              background: isDarkMode ? "#020D1A" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#1C2540",
            }}
          >
            are constantly putting concepts and ideas to the test and emphasize
            the user-centered approach in my work. I work with the latest
            techniques in web development and my agile workflow is the result of
            the precisely combined tools and strategies that include object
            oriented patterns, build scripts, pre-processors and minification,
            source code management, testing as well as deployment.
          </p>
          <Image
            src={isDarkMode ? sign2 : sign1}
            // src="/signature.png"
            className="img__sign"
            width={100}
            height={41}
            alt="sign"
          />
        </div>
      </div>
      <div className="header__bring">
        <h1
          className="header__bring__head"
          style={{ color: isDarkMode ? "#EBF4F6" : "#111111" }}
        >
          What I Bring to Your Team
        </h1>
        <p
          className="header__bring__txt"
          style={{ color: isDarkMode ? "#EBF4F6" : "#111111" }}
        >
          When considering what I can bring to your team, there are several
          valuable assets and skills that I possess. Here are some key
          highlights:
        </p>

        <div className="header__bring__box">
          <div
            className="header__bring__box--container box__1"
            style={{
              background: isDarkMode ? "#020D1A" : "#EEEEEE",
              color: isDarkMode ? "#EBF4F6" : "#111111",
            }}
          >
            <h3 style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              Extensive Experience
            </h3>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              With years of hands-on experience in various roles and projects, I
              bring a wealth of knowledge and expertise to the table.
            </p>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              I have tackled diverse challenges and gained insights from
              different industries, enabling me to offer a fresh perspective and
              innovative solutions.
            </p>
          </div>
          <div
            className="header__bring__box--container box__2"
            style={{
              background: isDarkMode ? "#03172D" : "#EBF4F6",
              color: isDarkMode ? "#EBF4F6" : "#111111",
            }}
          >
            <h3 style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              Strong Design Skills
            </h3>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              My design skills encompass a wide range of areas, including user
              experience (UX) design, user interface (UI) design, visual design,
              and prototyping.
            </p>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              I am well-versed in industry-standard design tools and techniques,
              allowing me to deliver high-quality work that aligns with industry
              best practices.
            </p>
          </div>
          <div
            className="header__bring__box--container box__1"
            style={{
              background: isDarkMode ? "#020D1A" : "#EEEEEE",
              color: isDarkMode ? "#EBF4F6" : "#111111",
            }}
          >
            <h3 style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              Creative Thinking
            </h3>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              Reativity is at the core of my design process. I have an ability
              for generating unique and imaginative ideas that push boundaries
              and captivate users.
            </p>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              I constantly strive to think outside the box, infusing my designs
              with a touch of originality that sets them apart from the
              competition.
            </p>
          </div>
          <div
            className="header__bring__box--container box__2"
            style={{
              background: isDarkMode ? "#03172D" : "#EBF4F6",
              color: isDarkMode ? "#03172D" : "#111111",
            }}
          >
            <h3 style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              Collaborative Approach
            </h3>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              {" "}
              strongly believe in the power of collaboration and teamwork. I
              thrive in an environment where ideas are shared openly, and
              feedback is embraced.
            </p>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              I am a proactive communicator who values constructive input from
              team members, fostering a collaborative atmosphere that leads to
              exceptional results.
            </p>
          </div>
          <div
            className="header__bring__box--container box__1"
            style={{
              background: isDarkMode ? "#020D1A" : "#EEEEEE",
              color: isDarkMode ? "#EBF4F6" : "#111111",
            }}
          >
            <h3 style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              Adaptability and Growth Mindset
            </h3>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              {" "}
              he design industry is ever-evolving, and I thrive in dynamic
              environments. I am quick to adapt to new technologies, design
              trends, and methodologies, ensuring that I stay ahead of the
              curve.
            </p>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              I approach challenges with a growth mindset, constantly seeking
              opportunities for personal and professional development.
            </p>
          </div>
          <div
            className="header__bring__box--container box__2"
            style={{
              background: isDarkMode ? "#03172D" : "#EBF4F6",
              color: isDarkMode ? "#03172D" : "#111111",
            }}
          >
            <h3 style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              Strong Attention to Detail
            </h3>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              {" "}
              pride myself on my meticulousness and dedication to precision. I
              pay close attention to every element of a design, ensuring that no
              detail goes unnoticed.
            </p>
            <p style={{ color: isDarkMode ? "#EEEEEE" : "#111111" }}>
              This commitment to excellence results in polished and refined
              deliverables that resonate with users.
            </p>
          </div>
        </div>
      </div>
      <div
        className="header__skill"
        style={{
          background: isDarkMode ? "#020D1A" : "#EBF4F6",
          color: isDarkMode ? "#ffff" : "#020A13",
        }}
      >
        <h1 className="header__skill__head">Skills</h1>
        <p className="header__skill__txt">
          And if it’s not listed here, I learn incredibly quickly
        </p>
        <div className="header__skill__box">
          <div className="txt">
            <h3 style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}>Design</h3>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Product Design
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>UX Design</p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Visual Design (UI)
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Wire-framing + Prototyping
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Journey-Mapping
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              UX Research
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Logo and Branding
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Creative Direction
            </p>
          </div>
          <div className="txt">
            <h3 style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}>
              Software
            </h3>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>Postman</p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>Sketch</p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Adobe Illustrator
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Adobe Photoshop
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>Figma</p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>InVision</p>
          </div>
          <div className="txt">
            <h3 style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}>
              Development
            </h3>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>HTML</p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              SASS + CSS
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Javascript + jQuery
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>ReactJS</p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              API Integrations
            </p>
            <p style={{ color: isDarkMode ? "#ffff" : "#58677D" }}>
              Working within SDKsg
            </p>
          </div>
        </div>
      </div>
      <div className="header__ux">
        <h1 className="header__ux__head">UX Projects</h1>
        <p className="header__ux__txt">
          And if it’s not listed here, I learn incredibly quickly
        </p>
        <div className="container">
          <Link href="#">
            <div className="box">
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
          <Link href="#">
            <div className="box">
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
          <Link href="#">
            <div className="box">
              <Image
                src="/ux-prj-3.png"
                className="img"
                width={450}
                height={250}
                alt="img"
              />
              <p className="title">Farmhub360</p>
              <p className="txt">Website · UI/UX Design/ Pitchdeck/ Branding</p>
            </div>
          </Link>
        </div>
        <h1 className="header__ux__head margin-top">Brand Identity Projects</h1>
        <p className="header__ux__txt">
          And if it’s not listed here, I learn incredibly quickly
        </p>
        <div className="container">
          <Link href="#">
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
          <Link href="#">
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
          <Link href="#">
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
        </div>
        <Link className="links" href="/project">
          <h3>View More</h3>
        </Link>
      </div>
      <div
        className="header__exp"
        style={{ background: isDarkMode ? "#031529" : "#EBF4F6" }}
      >
        <h1 className="header__ux__head">Experience</h1>
        <p className="header__ux__txt">
          And if it’s not listed here, I learn incredibly quickly
        </p>
        <div className="header__exp__box">
          <div
            className="container"
            style={{
              background: isDarkMode ? "#020A13" : "#ffff",
              color: isDarkMode ? "#ffff" : "#020A13",
            }}
          >
            <h3
              className="head"
              style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}
            >
              FINDWORKER
            </h3>
            <div className="content">
              <h3 className="content-head">UI/UX Designer</h3>
              <p
                className="content-txt"
                style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}
              >
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
            <div className="date">
              <p>2017 - 2018</p>
            </div>
          </div>
          <div
            className="container"
            style={{
              background: isDarkMode ? "#020A13" : "#ffff",
              color: isDarkMode ? "#ffff" : "#020A13",
            }}
          >
            <h3
              className="head"
              style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}
            >
              BothofUS
            </h3>
            <div className="content">
              <h3 className="content-head">Interaction Designer</h3>
              <p
                className="content-txt"
                style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}
              >
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
            <div className="date">
              <p>2019 - May</p>
            </div>
          </div>
          <div
            className="container"
            style={{
              background: isDarkMode ? "#020A13" : "#ffff",
              color: isDarkMode ? "#ffff" : "#020A13",
            }}
          >
            <h3
              className="head"
              style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}
            >
              Freelance/CEO Farmhub360
            </h3>
            <div className="content">
              <h3 className="content-head">Product Designer</h3>
              <p
                className="content-txt"
                style={{ color: isDarkMode ? "#ffff" : "#1C2540" }}
              >
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
            <div className="date">
              <p>2021 - Present</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header__contact">
        <div
          className="header__contact__box"
          style={{ color: isDarkMode ? "#ffff" : "#1F2937" }}
        >
          <Image src="/location.png" width={27} height={37} alt="image" />
          <h3 className="big">Visit me</h3>
          <p className="text">42, Montgomery Road, Sabo YABA Lagos Nigeria</p>
        </div>
        <div
          className="header__contact__box"
          style={{ color: isDarkMode ? "#ffff" : "#1F2937" }}
        >
          <Image src="/call.png" width={27} height={37} alt="image" />
          <h3 className="big">Call</h3>
          <div>
            <p className="text">+2348026260925</p>
            <p className="text">Mon - Fri, 8am - 6pm</p>
          </div>
        </div>
        <div
          className="header__contact__box"
          style={{ color: isDarkMode ? "#ffff" : "#1F2937" }}
        >
          <Image src="/message.png" width={27} height={37} alt="image" />
          <h3 className="big">Email</h3>
          <p className="text">alioseni9@gmail.com</p>
        </div>
      </div>
      <div
        className="header__work"
        style={{
          background: isDarkMode ? "#031529" : "#EBF4F6",
          color: isDarkMode ? "#ffff" : "#020A13",
        }}
      >
        <h1
          className="header__work__head "
          style={{ color: isDarkMode ? "#ffff" : "#020A13" }}
        >
          Want to work with me?
        </h1>
        <p
          className="header__work__txt "
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
    </Wrapper>
  );
};

export default Index;
