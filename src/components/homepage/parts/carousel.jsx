import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

import { useEffect, useState } from 'react';
 

export default function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => { 
    const apiUrl = 'https://api.testvalley.kr/main-banner/all';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }} 
        
        navigation={true} modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.mainBannerId}> 
            <img src={item.pcImageUrl} alt={`Slide ${item.mainBannerId}`} />
           
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
