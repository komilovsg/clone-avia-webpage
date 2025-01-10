// components/SliderToTravelPage.tsx

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import img1 from "../../../../../public/images/presintationImg/presentation_1.png"; // Импортируйте ваши изображения
import img2 from "../../../../../public/images/presintationImg/presentation_2.png"; // Импортируйте ваши изображения
import img3 from "../../../../../public/images/presintationImg/presentation_3.png"; // Импортируйте ваши изображения
import img4 from "../../../../../public/images/presintationImg/presentation_4.png"; // Импортируйте ваши изображения
import img5 from "../../../../../public/images/presintationImg/presentation_5.png"; // Импортируйте ваши изображения
import img6 from "../../../../../public/images/presintationImg/presentation_6.png"; // Импортируйте ваши изображения
import img7 from "../../../../../public/images/presintationImg/presentation_7.png"; // Импортируйте ваши изображения
import img8 from "../../../../../public/images/presintationImg/presentation_8.png"; // Импортируйте ваши изображения
import img9 from "../../../../../public/images/presintationImg/presentation_9.png"; // Импортируйте ваши изображения
import img10 from "../../../../../public/images/presintationImg/presentation_10.png"; // Импортируйте ваши изображения

// Настройки слайдера
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 350,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};

const SliderToTravelPage: React.FC = () => {
  return (
    <div className="slider-container relative w-full py-2">
      {" "}
      {/* Установите нужную высоту */}
      <Slider {...sliderSettings}>
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
          (img, index) => (
            <div key={index} className="">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                // layout="fill"
                objectFit="cover" // Используйте cover для обрезки или contain для полного отображения
                className=""
              />
            </div>
          ),
        )}
      </Slider>
    </div>
  );
};

export default SliderToTravelPage;
