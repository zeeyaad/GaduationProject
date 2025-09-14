import React from "react";
import User_Profile from "../../../Assets/User_Profile.png";
import logo from "../../../Assets/Logo.png";
import Tennis from "../../../Assets/Tennis Court.png";
import Pool from "../../../Assets/Pool.png";
import { Link } from "react-router-dom";


function UserDashboard() {
  return (
    <div className="min-h-screen bg-background text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-black border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer hover:text-green-400 text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-green-400 text-gray-300">My Bookings</li>
          <li className="cursor-pointer hover:text-green-400 text-gray-300">Events</li>
          <li className="cursor-pointer hover:text-green-400 text-gray-300">Memeber</li>
          <li className="cursor-pointer hover:text-green-400 text-gray-300">
            Logout
          </li>
        </ul>
        <div className="w-8 h-8 bg-gray-600 rounded-full relative group">
          <img src={User_Profile} alt="User Profile" className="w-full h-full object-cover" />
          <div className="absolute top-8 right-0 bg-gray-800 rounded shadow-lg hidden group-hover:block z-10">
              <ul className="p-2 space-y-2 min-w-32">
                <li className="hover:text-green-400 cursor-pointer text-gray-300">My Profile</li>
                <li className="hover:text-green-400 cursor-pointer text-gray-300">Settings</li>
                <li className="hover:text-green-400 cursor-pointer text-gray-300">Logout</li>
              </ul>
            </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="px-8 py-6 text-right">
        <h1 className="text-4xl font-bold text-white mb-2">مرحبا. محمود</h1>
        <p className="text-gray-400 text-lg">عضو مند 21 سنه</p>
      </div>

      {/* Status Section */}
      <div className="flex items-center justify-between px-8 py-4 bg-black rounded-lg mx-8 mb-6">
        <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">Status: Active</span>
        <span className="text-yellow-400 font-semibold text-lg">Membership: Gold</span>
        <span className="text-2xl font-bold text-white">Points: 1200</span>
        <Link to="/User_Booking" className="text-white text-lg">حجوزاتي</Link>
      </div>

      {/* Activities Section */}
      <h2 className="text-2xl font-bold mb-4 text-white text-right mr-8">الفعاليات والانشطة</h2>

      <div className="grid grid-cols-2 gap-8 px-8 py-6 bg-background">
        {/* My Bookings Table */}
        <div>
          <div className="bg-background overflow-hidden">
            <table className="w-full text-right">
              <thead className="bg-background">
                <tr className="text-white text-sm">
                  <th className="p-3 text-right">الحالة</th>
                  <th className="p-3 text-right">النشاط</th>
                  <th className="p-3 text-right">التاريخ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-white text-sm">مؤكد</td>
                  <td className="p-3 text-white text-sm">نتبس</td>
                  <td className="p-3 text-white text-sm">25 أغس 2023</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-yellow-400 text-sm">ملاتی</td>
                  <td className="p-3 text-white text-sm">نمفسسي</td>
                  <td className="p-3 text-white text-sm">27 أغس 2023</td>
                </tr>
                <tr>
                  <td className="p-3 text-white text-sm">يلنىطار</td>
                  <td className="p-3 text-white text-sm">جيم</td>
                  <td className="p-3 text-white text-sm">29 أغس 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Events and Activities Section */}
        <div className="text-right">
          <div className="flex space-x-reverse space-x-8 justify-end">
            <div className="bg-gray-800 rounded-lg overflow-hidden w-36 sm:w-44 md:w-52 lg:w-64 xl:w-72 2xl:w-80 mr-4">
              <img src={Tennis} alt="event1" className="w-full h-28 sm:h-32 md:h-36 lg:h-44 xl:h-48 2xl:h-52 object-cover" />
              <button className="w-full bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition-colors">Join</button>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden w-36 sm:w-44 md:w-52 lg:w-64 xl:w-72 2xl:w-80 mr-4">
              <img src={Pool} alt="event2" className="w-full h-28 sm:h-32 md:h-36 lg:h-44 xl:h-48 2xl:h-52 object-cover" />
              <button className="w-full bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition-colors">Join</button>
            </div>
          </div>
        </div>
      </div>



      {/* Upcoming Reservations & Subscription */}
      <div className="px-8 py-6 grid grid-cols-3 gap-4">
        {/* First Photo Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">رفمات نانخيونت</h2>
          <div className="flex space-x-reverse space-x-8 justify-end">
            <div className="bg-gray-800 rounded-lg overflow-hidden w-36 sm:w-40 md:w-44 lg:w-52 xl:w-56 2xl:w-60">
              <img src={Tennis} alt="activity1" className="w-full h-24 sm:h-26 md:h-28 lg:h-32 xl:h-36 2xl:h-40 object-cover" />
              <div className="p-2">
                <p className="text-white text-sm mb-2">تملين</p>
                <button className="w-full bg-green-500 py-2 text-white font-medium">Join</button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden w-36 sm:w-40 md:w-44 lg:w-52 xl:w-56 2xl:w-60">
              <img src={Pool} alt="activity2" className="w-full h-24 sm:h-26 md:h-28 lg:h-32 xl:h-36 2xl:h-40 object-cover" />
              <div className="p-2">
                <p className="text-white text-sm mb-2">حاول</p>
                <button className="w-full bg-green-500 py-2 text-white font-medium">Join</button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Photo Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">أنشطة إضافية</h2>
          <div className="flex space-x-reverse space-x-8 justify-end">
            <div className="bg-gray-800 rounded-lg overflow-hidden w-36 sm:w-40 md:w-44 lg:w-52 xl:w-56 2xl:w-60">
              <img src={Tennis} alt="activity3" className="w-full h-24 sm:h-26 md:h-28 lg:h-32 xl:h-36 2xl:h-40 object-cover" />
              <div className="p-2">
                <p className="text-white text-sm mb-2">رياضة</p>
                <button className="w-full bg-green-500 py-2 text-white font-medium">Join</button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden w-36 sm:w-40 md:w-44 lg:w-52 xl:w-56 2xl:w-60">
              <img src={Pool} alt="activity4" className="w-full h-24 sm:h-26 md:h-28 lg:h-32 xl:h-36 2xl:h-40 object-cover" />
              <div className="p-2">
                <p className="text-white text-sm mb-2">سباحة</p>
                <button className="w-full bg-green-500 py-2 text-white font-medium">Join</button>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">الاشنرالك والدفع</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-yellow-400 font-semibold text-lg mb-2">Gold</p>
            <p className="text-gray-300 mb-4">30 يونيو 2025 30</p>
            <button className="bg-green-500 px-6 py-3 rounded text-white font-medium w-full">تجديد الاشتراك</button>
          </div>
        </div>
      </div>




      {/* Points & Settings */}
      <div className="px-8 py-6 grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">النقاط والضاقات</h2>
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="#374151"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="#22c55e"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="364"
                  strokeDashoffset="120"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                1200
              </span>
            </div>
            <p className="text-gray-300 mb-2">Gharr</p>
            <p className="text-gray-300 mb-2">2000 يوم</p>
            <p className="text-gray-400 text-sm mb-4">نحد القاقين 2000 م</p>
            <div className="flex space-x-2 mt-4">
              <button className="bg-green-500 px-4 py-2 rounded text-white text-sm">اسنيدال النقاط</button>
              <button className="bg-gray-700 px-4 py-2 rounded text-white text-sm">حول نتالك إلى مزيا</button>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">الإعددات</h2>
          <ul className="space-y-4 bg-gray-800 p-6 rounded-lg">
            <li className="hover:text-green-400 cursor-pointer text-gray-300 py-2 border-b border-gray-700">نصيل بيانات الحساب</li>
            <li className="hover:text-green-400 cursor-pointer text-gray-300 py-2 border-b border-gray-700">ننقيبر كلمة المرور</li>
            <li className="hover:text-green-400 cursor-pointer text-gray-300 py-2">الاشعارات</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default UserDashboard;
