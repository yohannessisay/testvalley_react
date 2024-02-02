import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [data, setData] = useState([]);
  const [otherData, setOtherData] = useState([]);

  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    const apiUrl = "https://api.testvalley.kr/collections?prearrangedDiscount";

    fetch(apiUrl)
      .then((response) => response.json())
      .then(async (result) => {
        const tempData = result.items.filter(
          (el) => el.type === "SINGLE" && el.viewType === "TILE"
        );
        setData(tempData);
        setOtherData(tempData.slice(1)); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleSlideChange = (direction) => {
    if (swiper) {
      if (direction === "next") {
        swiper.slideNext();
      } else if (direction === "prev") {
        swiper.slidePrev();
      }
    }
  };
  return (
    <div className="mb-8">
      <div className="mt-8 flex justify-center w-2/3 p-4 ml-64">
        <div className="flex-initial w-1/5 mr-8">
          <div>
            <h2 className="text-3xl font-medium">{data[0]?.title}</h2>
            <h3 className="text-lg text-gray-500">{data[0]?.description}</h3>
          </div>
          <div className="flex mt-auto">
            <svg
              className="cursor-pointer"
              onClick={() => handleSlideChange("prev")}
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
              version="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="#2196F3"
                points="30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24"
              />
            </svg>
            <svg
              className="cursor-pointer"
              onClick={() => handleSlideChange("next")}
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
              version="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="#2196F3"
                points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"
              />
            </svg>
          </div>
        </div>
        <div className="flex-none w-3/4 relative">
          <Swiper
            onSwiper={setSwiper}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={60}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data.length > 0 &&
              data[0]?.items?.map((item) => (
                <SwiperSlide key={item.uuid}>
                  <img
                    src={item.publication?.media[0].uri}
                    alt={`Slide ${item.uuid}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      {otherData.length > 0 &&
        otherData.map((other, index) => (
          <div className="mt-8 flex justify-center w-2/3 p-4 ml-64" key={index}>
            <div className="flex-initial w-1/5 mr-8">
              <div>
                <h2 className="text-3xl font-medium">{other.title}</h2>
                <h2 className="text-lg text-gray-500 font-medium">
                  {other.description}
                </h2>

                <h3 className="text-lg text-gray-500"></h3>
              </div>
              <div className="flex mt-auto">
                <svg
                  className="cursor-pointer"
                  onClick={() => handleSlideChange("prev")}
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                  version="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#2196F3"
                    points="30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  onClick={() => handleSlideChange("next")}
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                  version="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#2196F3"
                    points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-none w-3/4 relative">
              <Swiper
                onSwiper={setSwiper}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={60}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {other.items.length > 0 &&
                  other.items.map((item) => (
                    <SwiperSlide key={item.uuid}>
                      <img
                        src={item.publication?.media[0].uri}
                        alt={`Slide ${item.uuid}`}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        ))}
    </div>
  );
}
