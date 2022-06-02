import './Main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "react-image-gallery/styles/css/image-gallery.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Keyboard, Pagination, Navigation, Autoplay, EffectFade } from "swiper";

function Main() {
  return (
    <>
      <Swiper
        initialSlide={0}
        effect={'fade'}
        loop={true}
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        keyboard={{
          enabled: true
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true
        }}
        speed={0.500}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[EffectFade, Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background1'>
            </div>
            <h1 className='description'>
              Have <span>an idea?</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background2'>
            </div>
            <h1 className='description'>
              Lets<span>formalize</span>
              <span> & document it!</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background3'>
            </div>
            <h1 className='description'>
              Define
              <span>the architecture</span>
              <span> & technology stack</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background4'>
            </div>
            <h1 className='description'>
              Team, costs
              <span> & deadline</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background5'>
            </div>
            <h1 className='description'>
              Roadmap,
              <span> tasks, </span>
              <span> implementation, QA</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background6'>
            </div>
            <h1 className='description'>
              Reach the World,
              <span> receive feedback</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background7'>
            </div>
            <h1 className='description'>
              React, improve,
              <span> support</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item'>
            <div className='carousel-background carousel-background8'>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Main;