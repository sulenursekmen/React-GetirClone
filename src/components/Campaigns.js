import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
  setBanners(Banners)
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
       {banners.length && banners.map((banner,index)=>(
        <div key={index}>
          <img src={banner.image} alt={banner.id}/>
        </div>
       ))}
      </Slider>
    </div>
  );
}
