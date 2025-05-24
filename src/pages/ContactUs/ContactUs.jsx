import Cover from "../Shared/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { Form } from "react-router-dom";

const ContactUs = () => {
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

      <SectionTitle
        heading={"Our Location"}
        subHeading={"Visit Us"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16 ">
        <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
          <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
            <MdOutlinePhoneInTalk />
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
            <h3 className="uppercase text-xl font-bold mb-2">Phone</h3>
            <p>+880 1234567890</p>
          </div>
        </div>
        <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
          <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px] ">
            <FaLocationDot />
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
            <h3 className="uppercase text-xl font-bold mb-2">Address</h3>
            <p>+880 1234567890</p>
          </div>
        </div>
        <div className="border border-gray-300 border-l-2 border-r-2 border-b-2 rounded-md">
          <div className="flex justify-center items-center text-white text-3xl bg-[#D1A054] rounded-t-md h-[70px]">
            <FaClock />
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-[#F3F3F3] mx-4 md:mx-6 mb-6 h-[250px] px-4">
            <h3 className="uppercase text-xl font-bold mb-2">Working Hours</h3>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
      <SectionTitle
        heading={"Contact Form"}
        subHeading={"Send us a message"}
      ></SectionTitle>
      <Form className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold">Name</h3>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:ml-2">
            <h3 className="mb-2 font-semibold">Email</h3>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Phone</h3>
            <input
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-2 font-semibold">Message</h3>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Your Message"
            rows={5}
          ></textarea>
        </div>
        <div className="flex justify-center mt-6">
          <button className="btn text-white font-semibold bg-gradient-to-r from-black via-gray-800 to-yellow-500 hover:from-black hover:to-yellow-400">
            Send Message <FaLocationArrow className="ml-2" />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;
