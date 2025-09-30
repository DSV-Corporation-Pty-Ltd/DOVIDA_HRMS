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
const classificationData = [
  { name: "Psychological – Work Related", value: 15, fill: "#6366F1" },
  { name: "Work Health & Safety (WH&S)", value: 20, fill: "#10B981" },
  { name: "Compliance & Conduct Breaches", value: 12, fill: "#F59E0B" },
  { name: "Physical Injuries", value: 25, fill: "#EF4444" },
  { name: "Environmental & Hazard Risk", value: 18, fill: "#3B82F6" },
];

const IncidentClassificationChart = () => {
  const totalCount = classificationData.reduce((a, b) => a + b.value, 0);

  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1 text-center">
        Number of Incident (Event Classification)
      </h3>

      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">
        Breakdown of incidents by classification
      </p>

      {/* Doughnut Chart Centered */}
      <div className="relative flex justify-center items-center w-full" style={{ height: 400 }}>
        <ResponsiveContainer width="70%" height="100%">
          <PieChart>
            <Pie
              data={classificationData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={135}
              paddingAngle={3}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              labelLine={true}
            >
              {classificationData.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [`${value} Events`, name]}
              contentStyle={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #E5E7EB",
                borderRadius: "6px",
              }}
            />

            {/* Legend at Bottom Center */}
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconSize={14}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label with "Total" + Number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
          <span className="block text-sm text-gray-600 dark:text-gray-300">
            Total
          </span>
          <span className="block text-3xl font-bold text-gray-900 dark:text-gray-100">
            {totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IncidentClassificationChart;
