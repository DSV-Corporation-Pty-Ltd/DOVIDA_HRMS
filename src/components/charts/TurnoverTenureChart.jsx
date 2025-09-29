import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data (replace with real values later)
const turnoverData = [
  { name: "0 to 12 months", value: 45, fill: "#F59E0B" }, // amber
  { name: "13 to 24 months", value: 30, fill: "#3B82F6" }, // blue
];

const TurnoverTenureChart = () => {
  const totalResignations = turnoverData.reduce((a, b) => a + b.value, 0);

  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1 text-center">
        Turnover – % People Leaving (in their Tenure)
      </h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">
        Distribution of resignations across tenure buckets
      </p>

      {/* Half Pie Chart */}
      <div
        className="relative flex justify-center items-center w-full mt-10" // ⬅️ moved chart down
        style={{ height: 350 }}
      >
        <ResponsiveContainer width="95%" height="100%">
          <PieChart>
            <Pie
              data={turnoverData}
              dataKey="value"
              nameKey="name"
              startAngle={180}
              endAngle={0}
              innerRadius={90}   // same radius as before
              outerRadius={150}  // same radius as before
              paddingAngle={4}
              label={{ fill: "currentColor", fontSize: 13 }}
            >
              {turnoverData.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value} People`}
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
              iconSize={14}
              layout="horizontal"
              verticalAlign="bottom"
              wrapperStyle={{ marginTop: 20 }}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label (aligned downward) */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Total Resignations: {totalResignations}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TurnoverTenureChart;
