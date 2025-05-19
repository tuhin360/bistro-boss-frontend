import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const slides = [
  { img: slide1, title: "Salads" },
  { img: slide2, title: "Soups" },
  { img: slide3, title: "Pizzas" },
  { img: slide4, title: "Deserts" },
  { img: slide5, title: "Salads" },
];

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11.00am to 10.00pm"}
      />
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              alt={`${slide.title} image`}
              className="w-full"
            />
            <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl lg:text-4xl uppercase text-white font-bold py-2">
              {slide.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
