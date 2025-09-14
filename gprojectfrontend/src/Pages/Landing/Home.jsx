import React from 'react';
import Courts from "../../../Assets/Courts.jpg";
import Logo from "../../../Assets/Logo.png";
import Mobile1 from "../../../Assets/Mobile1.png";
import Mobile2 from "../../../Assets/Mobile2.png";
import Carousel from "../../Shared/Carousel.jsx";
import Card from "../../Shared/Card.jsx";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
             {/* Hero Section with Diagonal Split */}
       <div className="relative h-screen overflow-hidden">
         {/* Left Section - Image with Diagonal Cut */}
         <div className="absolute inset-0 w-4/5 h-full bg-background">
           <img src={Courts} alt="Paddle Tennis Courts" className="w-full h-full object-cover" style={{
             clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)'
           }} />
         </div>

         {/* Right Section - Arabic Text and CTA */}
         <div className="absolute right-0 top-0 w-1/5 h-full bg-background flex items-center justify-center">
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-8">
            {/* Main Headline */}
            <div className="mb-8">
            <h1
              className="whitespace-nowrap text-6xl md:text-7xl  text-right text-white drop-shadow-lg leading-snug"
              dir="rtl"
              style={{
                position: "relative",
                right: "5rem", 
              }}
            >
              مش مجرد نادي
            </h1>


              <h2 className="whitespace-nowrap text-5xl md:text-4xl  text-right text-white drop-shadow-lg leading-snug" dir="rtl"
                 style={{
                  position: "relative",
                  right: "9rem", 
                  top: "2rem"
                }}
              >
                دا أسلوب حياة
              </h2>
            </div>
            
            {/* Sub-headline */}
            <div className="mb-12">
              <p className="text-xl text-gray-400 text-right" dir="rtl"style={{
                  position: "relative",
                  right: "10rem", 
                  top: "2rem",
                  fontSize: "xx-large"
                }}>
                اكثر من 5000 عضو
              </p>
            </div>
            
            {/* Call-to-Action Button */}
            <button className="bg-transparent border-2 border-buttonPorder text-white px-8 py-3 rounded-full hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-medium">
              سجل دلوقتي
            </button>
          </div>
        </div>
      </div>

      {/* Additional Content Sections */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Hewlan Club</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the ultimate sports and lifestyle destination. Join our community of over 5000 members and discover a new way of living.
            </p>
          </div>
          
          
          
          <Carousel/>

          
        </div>
      </div>

      
      
      {/* App Promotion Section */}
      <div className='bg-background py-16'>
        <div className="max-w-[1200px] mx-auto px-6 relative">
          {/* Centered Logo */}
          <div className="flex justify-center mb-12">
            <img src={Logo} alt="شعار نادي حلوان" className="h-[150px] object-contain" />
          </div>
          
          {/* Arabic Text */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4" dir="rtl">استفيد بلنقاط</h2>
            <p className="text-2xl md:text-3xl text-white" dir="rtl">من خلال تطبيق نادي حلوان</p>
          </div>
          
          {/* Mobile Phones Container */}
          <div className="flex justify-center items-center space-x-8 space-x-reverse">
            <div className="transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <img src={Mobile1} alt="Mobile App Screen 1" className="h-96 object-contain" />
            </div>
            <div className="transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <img src={Mobile2} alt="Mobile App Screen 2" className="h-96 object-contain" />
            </div>
          </div>
          
          {/* Download Button */}
          <div className="text-center mt-12">
            <Link to = "https://play.google.com">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center mx-auto space-x-2 space-x-reverse">
                <span>ANDROID APP ON</span>
                <span className="text-green-600 font-bold">Google Play</span>
              </button>
            </Link>
            
          </div>
        </div>
      </div>

      <Card/>
    </div>
  );
};

export default Home;
