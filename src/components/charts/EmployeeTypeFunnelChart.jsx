import React from "react";
import { ResponsiveContainer, FunnelChart, Funnel, Tooltip, LabelList } from "recharts";

const employeeTypeData = [
  { name: "Full Time", value: 250, fill: "#3B82F6" },          // Blue
  { name: "Fixed Term Full Time", value: 120, fill: "#10B981" }, // Green
  { name: "Part Time", value: 180, fill: "#F59E0B" },           // Amber
  { name: "Fixed Term Part Time", value: 90, fill: "#8B5CF6" },  // Purple
  { name: "Casual", value: 140, fill: "#EF4444" },              // Red
];

// Calculate percentages
const total = employeeTypeData.reduce((sum, item) => sum + item.value, 0);
const formattedData = employeeTypeData.map((item) => ({
  ...item,
  percentage: ((item.value / total) * 100).toFixed(1) + "%",
}));

const EmployeeTypeFunnelChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      <h3 className="text-lg font-bold mb-1 text-center">Employee Type Summary Report</h3>
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">Count & Percentage Breakdown</p>

      <ResponsiveContainer width="100%" height={420}>
        <FunnelChart>
          <Tooltip
            formatter={(value, name, props) => [
              `${value} Employees (${props.payload.percentage})`,
              name,
            ]}
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
              fontSize: "12px",
            }}
          />
          <Funnel dataKey="value" data={formattedData} isAnimationActive={true}>
            <LabelList
              position="inside"
              formatter={(entry) =>
                `${entry.name} - ${entry.value} (${entry.percentage})`
              }
              fill="#fff"
              stroke="none"
              fontSize={12}
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeTypeFunnelChart;
