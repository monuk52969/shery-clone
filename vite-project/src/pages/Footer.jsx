import { FaInstagram, FaLinkedinIn, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";
import Logo from '../assets/images/logo.webp'; // 🦁 Replace with your logo path

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-16 py-12  text-white font-helvetica">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-zinc-700 pb-10">
        {/* Socials */}
        <div>
          <img src={Logo} alt="Logo" className="w-10 h-10 mb-4" />
          <p className="mb-4 font-helvetica font-400">Let's connect with our socials</p>
          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-[#27DFB3] transition" />
            <FaLinkedinIn className="hover:text-[#27DFB3] transition" />
            <FaDiscord className="hover:text-[#27DFB3] transition" />
            <FaYoutube className="hover:text-[#27DFB3] transition" />
            <FaTwitter className="hover:text-[#27DFB3] transition" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className=" mb-3 font-helvetica-bold font-700">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="font-helvetica-light font-300" href="#">About Us</a></li>
            <li><a className="font-helvetica-light font-300" href="#">Support</a></li>
            <li><a className="font-helvetica-light font-300" href="#">Privacy Policy</a></li>
            <li><a className="font-helvetica-light font-300" href="#">Terms and Condition</a></li>
            <li><a className="font-helvetica-light font-300" href="#">Pricing and Refund</a></li>
            <li><a className="font-helvetica-light font-300" href="#">Hire From Us</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-helvetica-bold font-700 mb-3">COMMUNITY</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="font-helvetica-light font-300" href="#">Inertia</a></li>
            <li><a className="font-helvetica-light font-300" href="#">Discord</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-helvetica-bold font-700 mb-3">Get In Touch</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="font-helvetica-light font-300" href="tel:+91969778470">+91 9691778470</a></li>
            <li><a className="font-helvetica-light font-300" href="tel:+918109161752">+91 8109161752</a></li>
            <li><a className="font-helvetica-light font-300" href="mailto:hello@sheryians.com">hello@sheryians.com</a></li>
            <li className="font-helvetica-light font-300">23-B, Indrapuri Sector C,<br />Bhopal(MP), 462021</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 text-center font-helvetica-light font-300 text-sm text-gray-400">
        Copyright © 2025 Sheryians Pvt. Ltd. <br />All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
