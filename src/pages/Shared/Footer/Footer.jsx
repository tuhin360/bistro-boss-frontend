import { Link } from "react-router-dom";
 import { FaFacebookF } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row ">
        {/* Contact Us Section */}
        <div className="w-full md:w-1/2 bg-[#1F2937] flex flex-col items-center justify-center p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/2 bg-[#111827] flex flex-col items-center justify-center p-6 text-white">
          <span className="text-lg font-semibold mb-1">Follow Us</span>
          <span className="mb-4">Join us on social media</span>
          <div className="grid grid-flow-col gap-4">
            <Link><FaFacebookF /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
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
