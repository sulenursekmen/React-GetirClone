import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const [phoneNumber, setPhoneNumber] = useState("");

  const phones = {
    'US': '+1',
    'GB': '+44',
    'FR': '+33',
    'DE': '+49',
    'IT': '+39',
    'IN': '+91',
    'ES': '+34',
    'CA': '+1',
    'AU': '+61',
    'BR': '+55',
    'CN': '+86',
    'JP': '+81',
    'RU': '+7',
    'TR': '+90',
    'KR': '+82',
    'MX': '+52',
    'ID': '+62',
    'ZA': '+27',
    'AR': '+54',
    'EG': '+20',
    'NG': '+234',
    'SA': '+966',
    'IR': '+98',
    'PK': '+92',
    'VN': '+84',
    'PH': '+63',
    'TH': '+66',
    'BD': '+880',
    'MY': '+60',
    'CO': '+57',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed:true,
    autoplay:true,
    cssEase:"linear",

  };

  const handleButtonClick = () => {
    // Burada butona tıklanınca yapılacak işlemleri ekleyebilirsiniz.
    // Örneğin, kullanıcının seçtiği ülkenin alan kodunu ve girdiği telefon numarasını kullanarak bir işlem yapabilirsiniz.
    console.log("Ülke Kodu:", selected);
    console.log("Telefon Numarası:", phoneNumber);
  };

  return (
    <div className="relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt="Hero 1"
          />
        </div>
       
      </Slider>

      <div className="container flex  justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-10">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir"
          />
          <h3
            className="font-semibold text-white"
            style={{ fontSize: "2rem", marginTop: "2rem" }}
          >
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>

        <div className="w-[400px] rounded-lg bg-gray-50 p-6 mb-4" style={{ backgroundColor: "rgba(249, 250, 251, 1)", padding: "10px" }}>
          <h4 className="text-primary-brand-color text-center font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex items-center mt-4 gap-x-2">
            <ReactFlagsSelect
              className="flag-select mr-2"
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={['US', 'GB', 'FR', 'DE', 'IT', 'IN', 'ES', 'CA', 'AU', 'BR', 'CN', 'JP', 'RU', 'TR', 'KR', 'MX', 'ID', 'ZA', 'AR', 'EG', 'NG', 'SA', 'IR', 'PK', 'VN', 'PH', 'TH', 'BD', 'MY', 'CO']}
              customLabels={phones}
            />
           <label className="flex-1 relative block">
            <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"/>
            <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
           </label>
          </div>
          <button
            className="bg-brand-yellow-color h-12 transition-colors text-primary-brand-color font-semibold py-2 px-4 mt-4 rounded-md w-full hover:text-brand-yellow-color hover:bg-primary-brand-color"
            onClick={handleButtonClick}
          >
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}
