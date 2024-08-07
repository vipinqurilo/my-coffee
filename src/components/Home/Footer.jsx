import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io5";
import logo from "../../assets/logo_white-7.png";

const Footer = () => {
  return (
    <footer className="footer flex bg-black py-4 mt-10">
      <div className="footer-content lg:flex justify-between w-full lg:mx-[20%]">
        <div className="footer-left flex flex-col md:flex-row items-center justify-center ">
          <img src={logo} alt="Logo" className="footer-logo mx-auto " />
          <div className="px-10 text-white py-4">
            © Copyright 2024 –{" "}
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              Stradale
            </a>{" "}
            by{" "}
            <a
              href="https://bravisthemes.com"
              target="_blank"
              rel="noopener nore ferrer"
              className="text-secondary"
            >
              Bravisthemes
            </a>
          </div>
        </div>
        <div className="footer-right flex items-center justify-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon twitter p-2 rounded-full bg-secondary"
          >
            <IoLogoTwitter className="text-black" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook p-2 rounded-full bg-secondary"
          >
            <IoLogoFacebook className="text-black" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin p-2 rounded-full bg-secondary"
          >
            <IoLogoLinkedin className="text-black" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram p-2 rounded-full bg-secondary"
          >
            <IoLogoInstagram className="text-black" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon pinterest p-2 rounded-full bg-secondary"
          >
            <IoLogoPinterest className="text-black" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
