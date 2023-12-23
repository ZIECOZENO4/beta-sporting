'use client'
import React, {useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function PhoneHero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div >
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
    
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/images/backgroung1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/basket.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/football.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/rrn.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/zeno web.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bsi.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a7.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/backgroung1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/basket.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/football.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/rrn.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/zeno web.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bsi.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/add2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/add2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/a7.jpg" />
        </SwiperSlide>
      </Swiper>
        </Swiper>
    </div>
    )
}
