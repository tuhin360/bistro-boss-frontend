import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row">
        {/* Contact Us Section */}
        <div className="w-full md:w-1/2 bg-[#1F2937] flex flex-col items-center justify-center p-6 text-white">
          <h3 className="text-xl md:text-3xl font-semibold mb-2 font-inter">
            Contact Us
          </h3>
          <p className="font-inter text-xl leading-9">
            123 ABS Street, Uni 21, Bangladesh
          </p>
          <p className="font-inter text-xl leading-9">+88 123456789</p>
          <p className="font-inter text-xl leading-9">
            Mon - Fri: 08:00 - 22:00
          </p>
          <p className="font-inter text-xl leading-9">
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/2 bg-[#111827] flex flex-col items-center justify-center p-6 text-white">
          <span className="text-lg font-semibold mb-1 font-inter md:text-3xl">
            Follow Us
          </span>
          <span className="font-inter text-xl leading-9">
            Join us on social media
          </span>

          <div className="flex gap-4 mt-4">
            <Link
              className="w-10 h-10 text-xl border-2 border-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
              to="#"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="w-10 h-10 text-xl border-2 border-white rounded-full flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-yellow-500 hover:text-white transition-colors duration-300"
              to="#"
            >
              <FaInstagram />
            </Link>
            <Link
              className="w-10 h-10 text-xl border-2 border-white rounded-full flex items-center justify-center hover:bg-sky-400 hover:text-white transition-colors duration-300"
              to="#"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="footer footer-center p-4 bg-[#151515] text-white">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro Boss
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
