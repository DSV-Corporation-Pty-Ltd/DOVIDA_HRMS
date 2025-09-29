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
const remunerationData = [
  { year: "2018", CareGivers: 40000, KeyPlayers: 50000 },
  { year: "2019", CareGivers: 42000, KeyPlayers: 55000 },
  { year: "2020", CareGivers: 45000, KeyPlayers: 60000 },
  { year: "2021", CareGivers: 48000, KeyPlayers: 65000 },
  { year: "2022", CareGivers: 50000, KeyPlayers: 70000 },
  { year: "2023", CareGivers: 52000, KeyPlayers: 75000 },
  { year: "2024", CareGivers: 55000, KeyPlayers: 80000 },
];

const TrendInRemunerationChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1">Trend in Remuneration</h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">
        Remuneration (USD) by profile across years
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 text-sm">
        {[
          "Employee Entity",
          "Location Name",
          "Department Name",
          "Designation Name",
          "Date of Joining",
          "Employee Status",
          "Employment Type",
        ].map((label, i) => (
          <select
            key={i}
            className="bg-transparent border px-3 py-1 rounded text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          >
            <option className="text-gray-900 dark:text-gray-100">{label}</option>
          </select>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={remunerationData}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
            className="dark:stroke-gray-700"
          />
          <XAxis
            dataKey="year"
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
          />
          <YAxis
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            formatter={(value) => `$${value.toLocaleString()}`}
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

          {/* Bars for each profile */}
          <Bar dataKey="CareGivers" fill="#F59E0B" barSize={30} />
          <Bar dataKey="KeyPlayers" fill="#6366F1" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendInRemunerationChart;
