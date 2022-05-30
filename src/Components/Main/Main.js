import './Main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "react-image-gallery/styles/css/image-gallery.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";

function Main() {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='carousel-item carousel-item1'>
            <h1 className='description'>
              Have <span>an idea?</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item carousel-item2'>
            <h1 className='description'>
              Lets<span>formalize</span>
              <span>& document it!</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item carousel-item3'>
            <h1 className='description'>
              Define
              <span>the architecture</span>
              <span>& technology stack</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item carousel-item4'>
            <h1 className='description'>
              Team, costs
              <span>& deadline</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item carousel-item5'>
            <h1 className='description'>
              Roadmap,
              <span>tasks,</span>
              <span>implementation, QA</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item carousel-item6'>
            <h1 className='description'>
              Reach the World,
              <span>receive feedback</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item carousel-item7'>
            <h1 className='description'>
            React, improve,
              <span>support</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item carousel-item8'>
            <h1 className='description'>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Main;