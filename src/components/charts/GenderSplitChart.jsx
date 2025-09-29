import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Tooltip,
  Legend,
} from "recharts";

const genderData = [
  { name: "Male", value: 50, fill: "#3B82F6" },
  { name: "Female", value: 40, fill: "#EC4899" },
  { name: "Other", value: 10, fill: "#F59E0B" },
];

const GenderSplitChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col relative text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1">Gender Split</h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">
        Male / Female / Other distribution
      </p>

      <div className="flex-grow flex items-center justify-center">
        <ResponsiveContainer width="100%" height={350}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="100%"
            barSize={25}
            data={genderData}
          >
            <RadialBar
              minAngle={15}
              clockWise
              dataKey="value"
              label={{
                fill: "currentColor", // follows text color (gray-900 or gray-100)
                position: "insideStart",
                fontSize: 12,
              }}
            />
            <Legend
              iconSize={14}
              layout="horizontal"
              verticalAlign="bottom"
              wrapperStyle={{ fontSize: 12 }}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100">{value}</span>
              )}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "6px",
                border: "1px solid #172d5aff",
              }}
              labelStyle={{ color: "black" }}
              itemStyle={{ color: "black" }}
              cursor={{ fill: "transparent" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GenderSplitChart;
