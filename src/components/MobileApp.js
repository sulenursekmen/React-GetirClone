import React from 'react'

export default function MobileApp() {
  return (
    <div className='bg-primary-brand-color bg-mobile-app flex items-center justify-between  mt-7 font-semibold text-white rounded-lg'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-2xl tracking-tight'>Getir'i indirin!</h3>
        <p >İstediğiniz ürünleri dakikalar içinde kapınıza <br/>getirelim.</p>
        <nav className='mt-5 flex gap-x-2'>
          <a href='#' className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' alt='img1'/>
          </a>
          <a href='#' className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/>
          </a>
          <a href='#' className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/>
          </a>


        </nav>
      </div>
         <picture className='pt-24'>
          <img src='https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png'/>
         </picture>

    </div>
  )
}
