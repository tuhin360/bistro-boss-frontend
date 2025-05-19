import React, { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <SectionTitle
        heading="Testimonials"
        subHeading="What Our Customers Say"
      />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-6 md:p-10 max-w-3xl mx-auto text-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="mx-auto mb-4"
              />
              <Quote className="mx-auto text-gray-400 size-12 rotate-180 mb-4" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                {review.details}
              </p>
              <h3 className="text-base sm:text-lg md:text-2xl text-orange-500 font-semibold">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
