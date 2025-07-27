import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingContactButtons = () => {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-4 z-50">
      <a
        href="https://wa.me/8801300130885?text=Hello!%20I%20want%20to%20know%20more"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-md flex items-center justify-center transition-all duration-200"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      <a
        href="tel:+8801300130885"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-5 shadow-md flex items-center justify-center transition-all duration-200"
        title="Call Now"
      >
        <FaPhone size={26} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
