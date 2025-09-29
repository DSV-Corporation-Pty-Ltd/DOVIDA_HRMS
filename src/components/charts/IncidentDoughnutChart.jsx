import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data (replace with real counts)
const incidentData = [
  { name: "Incident", value: 35, fill: "#EF4444" }, // red
  { name: "Hazard & Risk", value: 25, fill: "#F59E0B" }, // amber
  { name: "Never Miss", value: 40, fill: "#3B82F6" }, // blue
];

const IncidentDoughnutChart = () => {
  const totalCount = incidentData.reduce((a, b) => a + b.value, 0);

  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1 text-center">Incident – Event Type Distribution</h3>

      {/* Subtext */}
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400 text-center">
        Breakdown of Incidents, Hazards & Risks, and Never Miss events
      </p>

      {/* Doughnut Chart */}
      <div className="relative flex justify-center items-center w-full" style={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={incidentData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={150}
              paddingAngle={3}
              label={{ fill: "currentColor", fontSize: 13 }}
            >
              {incidentData.map((d, i) => (
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
              labelStyle={{ color: "black" }}
              itemStyle={{ color: "black" }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              iconSize={14}
              wrapperStyle={{ marginTop: 20 }}
              formatter={(value) => (
                <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Total: {totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IncidentDoughnutChart;
