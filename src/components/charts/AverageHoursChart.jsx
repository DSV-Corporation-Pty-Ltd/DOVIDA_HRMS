import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data
const hoursData = [
  { name: "Care Givers / Part-time", value: 25, fill: "#F59E0B" }, // amber
  { name: "Key Players", value: 35, fill: "#6366F1" }, // indigo
];

const AverageHoursChart = () => {
  const keyPlayerHours = hoursData.find((d) => d.name === "Key Players")?.value;

  return (
    <div className="bg-card dark:bg-dm-card p-8 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1 text-center">
        Average Hours – Care Givers / Part-time Employees
      </h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">
        Average working hours split between Key Players and Care Givers / PT
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 text-sm justify-center">
        {["Employee Entity", "Department Name", "Designation Name", "Location Name"].map(
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

      {/* Half Pie Chart */}
      <div
        className="relative flex justify-center items-center w-full mt-6" // 👈 Added margin-top
        style={{ height: 500 }}
      >
        <ResponsiveContainer width="90%" height="100%">
          <PieChart>
            <Pie
              data={hoursData}
              dataKey="value"
              nameKey="name"
              startAngle={360}
              endAngle={0}
              innerRadius={150}
              outerRadius={200}
              paddingAngle={4}
              label={{ fill: "currentColor", fontSize: 14 }}
            >
              {hoursData.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value} hrs`}
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
              iconSize={16}
              layout="horizontal"
              verticalAlign="bottom"
              wrapperStyle={{ marginTop: 30 }}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Key Players: {keyPlayerHours} hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default AverageHoursChart;
