import { useState, useRef } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./OrderTab.css";

const OrderTab = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRefs = useRef([]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const itemsPerPage = 6;

  // Split items into pages
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    chunkedItems.push(items.slice(i, i + itemsPerPage));
  }

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {chunkedItems.map((pageItems, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div
              ref={(el) => (slideRefs.current[pageIndex] = el)}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center  mb-10 ${
                activeSlide === pageIndex ? "fade-in" : ""
              }`}
            >
              {pageItems.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
