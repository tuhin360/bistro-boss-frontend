import Cover from "../Shared/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_rw14j24",
        "template_6m0qdwh",
        form.current,
        "1fUGboxoEk715gn9R"
      )
      .then(
        () => {
          setIsSending(false);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "✅ Your message has been sent successfully.",
            confirmButtonColor: "#d1a054",
          });
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: `❌ Failed to send message. ${
              error.text || "Please try again later."
            }`,
            confirmButtonColor: "#d33",
          });
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Cover
        img={contactImg}
        description={"Would you like to try a dish?"}
        title={"Contact Us"}
      />

      <SectionTitle heading={"Our Location"} subHeading={"Visit Us"} />

      {/* Contact Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16">
        <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
          <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
            <MdOutlinePhoneInTalk />
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
            <h3 className="uppercase text-xl md:text-2xl font-bold mb-2 font-inter">
              Phone
            </h3>
            <p className="font-inter text-base">+880 1234567890</p>
          </div>
        </div>
        <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
          <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
            <FaLocationDot />
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
            <h3 className="uppercase text-xl md:text-2xl font-bold mb-2 font-inter">
              Address
            </h3>
            <p className="font-inter text-base">
              123 ABS Street, Uni 21, Bangladesh
            </p>
          </div>
        </div>
        <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
          <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
            <FaClock />
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
            <h3 className="uppercase text-xl md:text-2xl font-bold mb-2 font-inter">
              Working Hours
            </h3>
            <p className="font-inter text-base">Mon - Fri: 08:00 - 22:00</p>
            <p className="font-inter text-base">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>

      <SectionTitle heading={"Contact Form"} subHeading={"Send us a message"} />

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="mb-2 font-semibold font-inter">Name</h3>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="input input-bordered w-full font-inter  focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
          <div>
            <h3 className="mb-2 font-semibold font-inter">Email</h3>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="input input-bordered w-full font-inter  focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
          <div>
            <h3 className="mb-2 font-semibold font-inter">Phone</h3>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full font-inter  focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 font-semibold font-inter">Message</h3>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full font-inter  focus:outline-none focus:ring focus:ring-orange-200"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isSending}
            className={`btn text-white font-bold bg-gradient-to-r from-black via-gray-800 to-yellow-500 hover:from-black hover:to-yellow-400 font-inter ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}{" "}
            <FaLocationArrow className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
