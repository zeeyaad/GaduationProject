import React, { useState } from "react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");

  const bookings = [
    {
      id: 1,
      activity: "تنس",
      activityName: "Tennis",
      dateRange: "2 يونيو 6 — 25 يونيو 2025",
      location: "ملعب 2",
      status: "مؤكد",
      statusColor: "green",
      icon: "🎾",
      iconColor: "bg-green-500"
    },
    {
      id: 2,
      activity: "سباحة",
      activityName: "Swimming",
      dateRange: "10 ونييو 10 — 27 يونيو 2025",
      location: "حمام سياحه رئيسي",
      status: "بانتظار",
      statusColor: "yellow",
      icon: "🏊‍♂️",
      iconColor: "bg-blue-500"
    },
    {
      id: 3,
      activity: "جيم",
      activityName: "Gym",
      dateRange: "2 يونيو 8 — 20 يونيو 2025",
      location: "صالة رياضية",
      status: "إعادة أنمار",
      statusColor: "gray",
      icon: "🏋️‍♂️",
      iconColor: "bg-red-500"
    }
  ];

  const getStatusButtonColor = (status) => {
    switch (status) {
      case "مؤكد":
        return "bg-green-500 hover:bg-green-600";
      case "بانتظار":
        return "bg-yellow-500 hover:bg-yellow-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">حجوزاتي</h1>
        <p className="text-gray-400 text-sm">
          تابع كل أنشطتك ومواعيدك القادمة
        </p>
      </div>

      {/* Filter and Search Section */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        {/* Top Row - Filters */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {/* Date Filter */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <div className="relative">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
              >
                <option value="">Date</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Status</label>
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
              >
                <option value="">Senne</option>
                <option value="confirmed">مؤكد</option>
                <option value="pending">بانتظار</option>
                <option value="cancelled">ملغي</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Activity Filter */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Activity</label>
            <div className="relative">
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
              >
                <option value="">Searcn</option>
                <option value="tennis">تنس</option>
                <option value="swimming">سباحة</option>
                <option value="gym">جيم</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Search */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Seal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
            />
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            بحث
          </button>
        </div>
      </div>

      {/* Booking Cards */}
      <div className="space-y-4 mb-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              {/* Left Side - Icon */}
              <div className={`w-12 h-12 ${booking.iconColor} rounded-lg flex items-center justify-center text-white text-xl`}>
                {booking.icon}
              </div>

              {/* Middle Section - Details */}
              <div className="flex-1 mx-4">
                <h3 className="font-semibold text-lg mb-1">{booking.activity}</h3>
                <p className="text-gray-400 text-sm mb-1">{booking.dateRange}</p>
                <p className="text-gray-300 text-sm">{booking.location}</p>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="flex flex-col gap-2">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  إلغاء
                </button>
                <button className={`${getStatusButtonColor(booking.status)} text-white px-4 py-2 rounded-lg text-sm transition-colors`}>
                  {booking.status}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <div className="fixed bottom-4 left-4 right-4">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors">
          إضافة حجز جديد
        </button>
      </div>
    </div>
  );
};

export default Events;
