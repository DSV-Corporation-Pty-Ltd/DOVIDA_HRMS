import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data (replace with your actual values)
const careVsKeyData = [
  { name: "Care Giver", value: 60, fill: "#F59E0B" }, // amber
  { name: "Key Player", value: 40, fill: "#3B82F6" }, // blue
];

const KeyPlayerVsCareGiver = () => {
  const totalCount = careVsKeyData.reduce((a, b) => a + b.value, 0);

  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1 text-center">Care Giver vs Key Player</h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">
        Distribution of workforce roles
      </p>

      {/* Half Doughnut Chart */}
      <div className="relative flex justify-center items-center w-full mt-6" style={{ height: 380 }}>
        <ResponsiveContainer width="80%" height="100%">
          <PieChart>
            <Pie
              data={careVsKeyData}
              dataKey="value"
              nameKey="name"
              startAngle={180}
              endAngle={0}
              innerRadius={100}
              outerRadius={160}
              paddingAngle={4}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {careVsKeyData.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [`${value} People`, name]}
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
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconSize={14}
              wrapperStyle={{ marginTop: 20 }}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Total Count */}
        <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
          <span className="block text-sm text-gray-600 dark:text-gray-300">Total</span>
          <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">
            {totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default KeyPlayerVsCareGiver;
