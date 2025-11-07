"use client";
import Slider from "react-slick";

const HeaderSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  
const slides = [
  {
    image: "../../../assets/banner1.jpg",
    title: "Welcome to Borbheti Temple",
    subtitle: "A sacred space where devotion and peace unite",
  },
  {
    image: "../../../assets/banner2.jpg",
    title: "Na-Laguwa Utsav Celebration",
    subtitle: "Celebrate faith, tradition, and community together",
  },
  {
    image: "../../../assets/banner3.jpg",
    title: "Spiritual Journey Through Assam",
    subtitle: "Explore heritage, culture, and divine experiences",
  },
  {
    image: "../../../assets/banner4.jpg",
    title: "Experience Devotion Daily",
    subtitle: "Join rituals, prayers, and soulful gatherings",
  },
  {
    image: "../../../assets/banner5.jpg",
    title: "Unity in Faith and Culture",
    subtitle: "Connecting hearts through spirituality and tradition",
  },
];


  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[80vh] object-cover brightness-[0.75]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl font-light">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderSlider;
