import React, { useState } from "react";

const Membership = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">EBuder Butle</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#" className="hover:text-green-400 transition-colors">My Bookings</a>
            <a href="#" className="hover:text-green-400 transition-colors">Events</a>
            <a href="#" className="hover:text-green-400 transition-colors">Membership</a>
            <a href="#" className="hover:text-green-400 transition-colors">Logout</a>
          </nav>

          {/* User Profile */}
          <div className="relative">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">م</span>
              </div>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-sm hover:text-green-400 transition-colors"
              >
                Logout
              </button>
            </div>
            
            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">My Profile</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Logout</a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Top Section - Welcome and Status */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">مرحبا. محمود</h1>
              <p className="text-gray-400">عضو مند يللرمن</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">Active</span>
              <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">Gold</span>
              <span className="text-2xl font-bold">1200</span>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold">حجوزاتي</h2>
          </div>
        </div>

        {/* Events and Activities Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">الفعاليات والانشطة</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Events Table */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="bg-gray-700 p-4">
                  <div className="grid grid-cols-3 gap-4 text-sm font-semibold">
                    <div>الحالة</div>
                    <div>النشاط</div>
                    <div>البنات</div>
                  </div>
                </div>
                <div className="divide-y divide-gray-700">
                  <div className="grid grid-cols-3 gap-4 p-4 items-center">
                    <div className="text-green-400">موحد</div>
                    <div>نتبس</div>
                    <div>25 2023 أغس</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 items-center">
                    <div className="text-yellow-400">ملاتى</div>
                    <div>نمفيسي</div>
                    <div>27 2023 : عطس</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 items-center">
                    <div className="text-red-400">يلنىطار</div>
                    <div>جيم</div>
                    <div>29 2023 : قطس</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Cards */}
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-24 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Tennis Court</span>
                </div>
                <div className="p-3">
                  <button className="w-full bg-green-500 text-white py-2 rounded text-sm">
                    Join
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-24 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Tennis Court</span>
                </div>
                <div className="p-3">
                  <button className="w-full bg-green-500 text-white py-2 rounded text-sm">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Bookings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">رفمات نانخيونت</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-32 bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">Tennis Court</span>
              </div>
              <div className="p-4">
                <p className="text-sm mb-2">تملين</p>
                <button className="w-full bg-green-500 text-white py-2 rounded text-sm">
                  Join
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-32 bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">Indoor Court</span>
              </div>
              <div className="p-4">
                <p className="text-sm mb-2">حاول</p>
                <button className="w-full bg-green-500 text-white py-2 rounded text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Subscription, Points, and Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subscription and Payment */}
          <div>
            <h2 className="text-2xl font-bold mb-4">الاشنرالك والدفع</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Gold</div>
                  <div className="text-gray-400">30 302025 يونيو</div>
                </div>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                  تجديد الاشتراك
                </button>
              </div>
            </div>
          </div>

          {/* Points and Discounts */}
          <div>
            <h2 className="text-2xl font-bold mb-4">النقاط والضاقات</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-6 mb-6">
                {/* Progress Circle */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold">1200</span>
                      <span className="text-xs">2300</span>
                    </div>
                  </div>
                </div>
                
                {/* Points Info */}
                <div className="flex-1">
                  <div className="space-y-2">
                    <p className="font-semibold">Gharr</p>
                    <p className="text-gray-400">2000 يوم</p>
                    <p className="text-gray-400">نحد القاقين 2000 م</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
                  اسنيدال النقاط
                </button>
                <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
                  حول نتالك إلى مزيا
                </button>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div>
            <h2 className="text-2xl font-bold mb-4">الإعدادات</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-4">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  نصيل بيانات الحساب
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  ننقيبر كلمة المرور
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  الاشعارات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-12 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <div className="flex space-x-4">
                <span>بذهنيه الجنه الحجج جمجية حام الحقد ميلية دیر تنجه لتباك</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Membership;