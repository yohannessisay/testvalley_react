// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation,Autoplay } from 'swiper/modules';

import { useEffect, useState } from 'react';
 

export default function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock API endpoint for demonstration purposes
    const apiUrl = 'https://api.testvalley.kr/main-banner/all';

    // Fetch data from the API
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
            {/* Your slide content here */}
            <img src={item.pcImageUrl} alt={`Slide ${item.mainBannerId}`} />
           
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
