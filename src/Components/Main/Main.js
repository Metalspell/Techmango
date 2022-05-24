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
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true
        // }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
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
      </Swiper>
    </>
  );
}

export default Main;