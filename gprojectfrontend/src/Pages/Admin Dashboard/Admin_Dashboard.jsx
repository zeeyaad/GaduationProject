import React from "react";
import {
  User,
  Plus,
  UserPlus,
  ClipboardList,
  BarChart2,
  Users,
} from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const dataTrend = [
  { date: "2025-08-01", guests: 120, members: 850 },
  { date: "2025-08-08", guests: 150, members: 870 },
  { date: "2025-08-15", guests: 160, members: 890 },
  { date: "2025-08-22", guests: 170, members: 910 },
  { date: "2025-08-29", guests: 200, members: 930 },
  { date: "2025-09-05", guests: 220, members: 950 },
];

export default function Admin_Dashboard() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 p-4 border-r border-gray-700 flex flex-col">
        {/* Admin Info */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold">
            AD
          </div>
          <div>
            <h2 className="font-semibold">Admin One</h2>
            <p className="text-sm text-gray-400">Super Admin</p>
          </div>
        </div>

        {/* Actions */}
        <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-md mb-2 hover:bg-green-700">
          <Plus size={16} /> New Club
        </button>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md mb-2 hover:bg-gray-700">
          <UserPlus size={16} /> Add User
        </button>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md mb-2 hover:bg-gray-700">
          <ClipboardList size={16} /> Add Task
        </button>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md mb-6 hover:bg-gray-700">
          <BarChart2 size={16} /> Analytics
        </button>

        {/* Clubs */}
        <div className="bg-gray-800 p-3 rounded-md">
          <p className="font-medium mb-2">Clubs</p>
          <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-md">
            <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center">
              🏟️
            </div>
            <div>
              <p className="font-semibold">Maadi Club</p>
              <p className="text-sm text-gray-400">Tennis, Swimming</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-md">
            <p className="text-gray-400">Total Guests</p>
            <h2 className="text-3xl font-bold">210</h2>
            <p className="text-green-500">+11%</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md">
            <p className="text-gray-400">Total Members</p>
            <h2 className="text-3xl font-bold">950</h2>
            <p className="text-green-500">+3%</p>
          </div>
        </div>

        {/* Guests vs Members Trend */}
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-4">
            Guests vs Members (trend)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dataTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="guests" stroke="#22c55e" />
              <Line type="monotone" dataKey="members" stroke="#06b6d4" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Nav */}
        <div className="flex gap-3 bg-gray-800 p-3 rounded-md">
          <button className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600">
            Add Club
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600">
            Add User
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600">
            Add Task
          </button>
          <button className="px-3 py-1 rounded-md bg-white text-black font-medium">
            Reports
          </button>
        </div>

        {/* Guests & Memberships Report */}
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-4">
            Guests & Memberships Report
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {/* Chart */}
            <div className="col-span-2">
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={dataTrend}>
                  <defs>
                    <linearGradient id="colorGuests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorMembers"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="date" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="guests"
                    stroke="#22c55e"
                    fillOpacity={1}
                    fill="url(#colorGuests)"
                  />
                  <Area
                    type="monotone"
                    dataKey="members"
                    stroke="#06b6d4"
                    fillOpacity={1}
                    fill="url(#colorMembers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Numbers */}
            <div className="space-y-4">
              <div className="bg-gray-900 p-3 rounded-md">
                <p className="text-sm text-gray-400">Guests (latest)</p>
                <p className="text-xl font-bold">210</p>
                <p className="text-green-500">+11%</p>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <p className="text-sm text-gray-400">Members (latest)</p>
                <p className="text-xl font-bold">950</p>
                <p className="text-green-500">+3%</p>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <p className="text-sm text-gray-400">Guests in last 30 days</p>
                <p className="text-xl font-bold">1000</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
