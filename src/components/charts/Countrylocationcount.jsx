import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data (replace with actual data later)
const employeeDataByCountry = [
  { country: "USA", CareGivers: 120, KeyPlayers: 85 },
  { country: "Canada", CareGivers: 80, KeyPlayers: 65 },
  { country: "UK", CareGivers: 95, KeyPlayers: 70 },
  { country: "Germany", CareGivers: 110, KeyPlayers: 90 },
  { country: "India", CareGivers: 150, KeyPlayers: 130 },
];

const Countrylocationcount = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1">
        Employee Numbers – Care Givers / Key Players – Countries
      </h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">
        Distribution of Care Givers and Key Players by country
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 text-sm">
        {["Department Name", "Employee Entity", "Designation Name"].map(
          (label, i) => (
            <select
              key={i}
              className="bg-transparent border px-3 py-1 rounded text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            >
              <option className="text-gray-900 dark:text-gray-100">{label}</option>
            </select>
          )
        )}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={employeeDataByCountry}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
            className="dark:stroke-gray-700"
          />
          <XAxis
            dataKey="country"
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
          />
          <YAxis
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
            labelStyle={{ color: "black" }}
            itemStyle={{ color: "black" }}
          />
          <Legend
            formatter={(value) => (
              <span className="text-gray-900 dark:text-gray-100">{value}</span>
            )}
          />
          <Bar dataKey="CareGivers" fill="#10B981" barSize={30} />
          <Bar dataKey="KeyPlayers" fill="#3B82F6" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Countrylocationcount;
