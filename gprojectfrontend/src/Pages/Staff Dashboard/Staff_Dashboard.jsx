import React, { useState } from "react";
import { Search, Calendar, MessageSquare, AlertTriangle, Clock, CheckCircle, Plus, Filter, Users } from "lucide-react";

const tasksData = [
  {
    id: "TSK-101",
    title: "Update pool schedule",
    description: "Sync the weekly swimming classes and update the public calendar.",
    assignee: "Mona Ali",
    priority: "High",
    due: "2025-09-10",
    status: "In Progress",
    comments: 1,
  },
  {
    id: "TSK-102",
    title: "Fix tennis court lighting",
    description: "Report #554: Court 2 LEDs flicker after 8pm.",
    assignee: "Karim Adel",
    priority: "Urgent",
    due: "2025-09-03",
    status: "Blocked",
    comments: 1,
  },
  {
    id: "TSK-103",
    title: "Design membership flyer",
    description: "A5 bilingual flyer for new campaign.",
    assignee: "Nour Samir",
    priority: "Medium",
    due: "2025-09-14",
    status: "To Do",
    comments: 0,
  },
  {
    id: "TSK-104",
    title: "Inventory audit — gym",
    description: "Count towels, mats, protein stock and update sheet.",
    assignee: "Hoda Tarek",
    priority: "Low",
    due: "2025-08-31",
    status: "Done",
    comments: 1,
  },
];

const priorityColors = {
  Urgent: "bg-red-600 text-white",
  High: "bg-purple-600 text-white",
  Medium: "bg-blue-600 text-white",
  Low: "bg-gray-400 text-white",
};

const statusColors = {
  "To Do": "bg-gray-700",
  "In Progress": "bg-yellow-600",
  Blocked: "bg-red-700",
  Done: "bg-green-700",
};

export default function Staff_Dashboard() {
  const [tasks] = useState(tasksData);

  // status counters
  const statusCounts = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-background min-h-screen text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="bg-green-600 p-2 rounded-lg">
            <Users size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Staff Tasks</h1>
            <p className="text-sm text-gray-400">Manage tasks, statuses, and comments</p>
          </div>
        </div>

      </header>

      {/* Filters */}
      <div className="px-6 py-4 flex flex-wrap gap-3 items-center">
        <div className="flex items-center bg-gray-700 rounded-md px-3 py-2 flex-1 max-w-md">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by task, assignee, or ID..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
        <select className="bg-gray-800 px-3 py-2 rounded-md text-sm border border-gray-600">
          <option>All status</option>
        </select>
        <select className="bg-gray-800 px-3 py-2 rounded-md text-sm border border-gray-600">
          <option>All priority</option>
        </select>
        <button className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md text-sm border border-gray-600 hover:bg-gray-700">
          <Filter size={16} />
          More
        </button>
      </div>

      {/* Status Counters */}
      <div className="px-6 flex gap-4 mb-6">
        {[
          { name: "To Do", icon: Clock, color: "bg-gray-500" },
          { name: "In Progress", icon: Clock, color: "bg-orange-500" },
          { name: "Blocked", icon: AlertTriangle, color: "bg-red-500" },
          { name: "Done", icon: CheckCircle, color: "bg-green-500" }
        ].map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg ${color} text-white`}
          >
            <Icon size={16} />
            <span className="font-medium">{name}</span>
            <span className="font-bold text-lg">{statusCounts[name] || 0}</span>
          </div>
        ))}
      </div>

      {/* Tasks Table */}
      <div className="px-6">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-300 border-b border-gray-700">
                <th className="px-4 py-3 font-medium">Task</th>
                <th className="px-4 py-3 font-medium">Assignee</th>
                <th className="px-4 py-3 font-medium">Priority</th>
                <th className="px-4 py-3 font-medium">Due</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Comments</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="px-4 py-4">
                    <div className="font-semibold text-white">{task.title}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      {task.id} - {task.description}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-white">{task.assignee}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-white">
                      <Calendar size={16} className="text-gray-400" />
                      {task.due}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <select
                      value={task.status}
                      className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-md text-sm text-white focus:outline-none focus:border-green-500"
                    >
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Blocked">Blocked</option>
                      <option value="Done">Done</option>
                    </select>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-gray-400" />
                        <span className="text-white">{task.comments}</span>
                      </div>
                      <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm text-white transition-colors">
                        Comments
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
