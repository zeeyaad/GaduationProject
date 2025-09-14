import React from 'react';
import Logo from '../../Assets/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-background text-white py-8 border-t border-white/10'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between'>
                    {/* Left Section - Shield Logo */}
                    <Link to = "/">
                        <div className='flex items-center'>
                            <div className='w-16 h-20 relative mr-4'>
                                <img src={Logo} alt="Culb Logo" />
                            </div>
                        </div>
                    </Link>
                    

                    {/* Center Section - Arabic Navigation Links */}
                    <div className='flex items-center space-x-8 space-x-reverse' dir="rtl">
                        <Link to="/" className='text-white hover:text-gray-300 transition-colors text-lg'>
                            الصفحة الرئيسية
                        </Link>
                        <Link to="/Clubs" className='text-white hover:text-gray-300 transition-colors text-lg'>
                            الأندية
                        </Link>
                        <Link to="/Membership" className='text-white hover:text-gray-300 transition-colors text-lg'>
                            كن عضواً
                        </Link>
                        <Link to="/ContactUs" className='text-white hover:text-gray-300 transition-colors text-lg'>
                            تواصل معنا
                        </Link>
                    </div>

                    {/* Right Section - App Store Download Buttons */}
                     <div className='flex items-center space-x-4'>
                         {/* Google Play Button */}
                         <Link to="https://play.google.com">
                             <button className='bg-black text-white px-4 py-3 rounded-lg flex items-center space-x-2 space-x-reverse hover:bg-gray-800 transition-colors'>
                                 <div className='flex items-center'>
                                     {/* Google Play Icon */}
                                     <div className='w-6 h-6 mr-2'>
                                         <svg viewBox="0 0 24 24" fill="currentColor">
                                             <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                         </svg>
                                     </div>
                                     <div className='text-left'>
                                         <div className='text-xs text-gray-400'>ANDROID APP ON</div>
                                         <div className='text-sm font-semibold'>Google Play</div>
                                     </div>
                                 </div>
                             </button>
                         </Link>
                         
                         {/* Apple App Store Button */}
                         <Link to="https://apps.apple.com">
                             <button className='bg-black text-white px-4 py-3 rounded-lg flex items-center space-x-2 space-x-reverse hover:bg-gray-800 transition-colors'>
                                 <div className='flex items-center'>
                                     {/* Apple Icon */}
                                     <div className='w-6 h-6 mr-2'>
                                         <svg viewBox="0 0 24 24" fill="currentColor">
                                             <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                                         </svg>
                                     </div>
                                     <div className='text-left'>
                                         <div className='text-xs text-gray-400'>Download on the</div>
                                         <div className='text-sm font-semibold'>App Store</div>
                                     </div>
                                 </div>
                             </button>
                         </Link>
                     </div>
                </div>

                {/* Bottom Copyright */}
                <div className='text-center mt-8 pt-6 border-t border-white/10'>
                    <p className='text-gray-400'>&copy; {new Date().getFullYear()} Hewlan Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
