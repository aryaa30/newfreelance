
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import "./Swipers.css"
function Swipers(){
    return(
        <>
<Swiper
  slidesPerView={window.innerWidth > 768 ? 3 : 1}
  centeredSlides={false}
  spaceBetween={50}
  navigation={true}
  modules={[Navigation]}
  className="mySwiper"

  // breakpoints={{
  //   768: {
  //     slidesPerView: 1,
  //   },
  //   480:{
  //     slidesPerView: 1,
  //   },
  // }}
>
  <div>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide></div>
</Swiper>
</>
    )
}
export default Swipers;