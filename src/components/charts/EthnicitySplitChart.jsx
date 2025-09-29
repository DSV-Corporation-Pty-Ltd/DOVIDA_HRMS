import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const ethnicityData = [
  { name: "Asian", value: 40, fill: "#10B981" },
  { name: "White", value: 30, fill: "#3B82F6" },
  { name: "Black", value: 20, fill: "#F97316" },
  { name: "Hispanic", value: 10, fill: "#EF4444" },
];

const EthnicitySplitChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col relative">
      <h3 className="text-lg font-bold mb-1 text-black dark:text-white">Ethnicity Split</h3>
      <p className="text-xs mb-4 text-black dark:text-white">Distribution by ethnicity</p>

      <div className="flex-grow flex items-center justify-center relative text-black dark:text-white">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={ethnicityData}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              outerRadius={130}
              paddingAngle={5}
              label={{ fill: "currentColor", fontSize: 12 }}
            >
              {ethnicityData.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "var(--tw-prose-body, #fff)",
                border: "none",
                color: "inherit",
              }}
              labelStyle={{ color: "inherit" }}
              itemStyle={{ color: "inherit" }}
            />
            <Legend
              iconSize={14}
              layout="horizontal"
              verticalAlign="bottom"
              wrapperStyle={{ color: "inherit", fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Total */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <span className="text-xl font-bold text-black dark:text-white">
            Total: {ethnicityData.reduce((a, b) => a + b.value, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EthnicitySplitChart;
