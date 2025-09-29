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
  Cell,
} from "recharts";

// Dummy Data
const natureOfEventData = [
  { name: "Physical Aggression", value: 15 },
  { name: "Workplace Violence", value: 12 },
  { name: "Workload Related Stress", value: 10 },
  { name: "Spinal Injury", value: 8 },
  { name: "Occupational Stress / Burnout", value: 14 },
  { name: "Head Injury", value: 6 },
  { name: "Exposure to Trauma", value: 7 },
  { name: "Exposure to Hazard", value: 9 },
  { name: "Cuts / Lacerations", value: 5 },
  { name: "Contact with Biology", value: 4 },
  { name: "Breach of Privacy", value: 3 },
  { name: "Breach of Code", value: 7 },
];

// Pastel Colors
const COLORS = [
  "#93C5FD", "#FCA5A5", "#FCD34D", "#A7F3D0", "#C4B5FD", "#FDBA74",
  "#F9A8D4", "#86EFAC", "#FDE68A", "#BFDBFE", "#D8B4FE", "#FBCFE8",
];

const NatureOfEventChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-1">
        Number of Incident (Nature of Event)
      </h3>

      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">
        Distribution of incidents by nature of event (in %)
      </p>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={460}>
        <BarChart
          data={natureOfEventData}
          margin={{ top: 10, right: 30, left: 40, bottom: 100 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />

          {/* X Axis with event names shown */}
          <XAxis
            dataKey="name"
            angle={-40}
            textAnchor="end"
            interval={0}
            tick={{ fill: "currentColor", fontSize: 11 }}
            label={{
              value: "Nature of Event Collected",
              position: "insideBottom",
              offset: -80,
              fill: "currentColor",
            }}
          />

          {/* Y Axis with percentage */}
          <YAxis
            tick={{ fill: "currentColor" }}
            axisLine={{ stroke: "currentColor" }}
            label={{
              value: "Nature of Event Collected (%)",
              angle: -90,
              position: "insideLeft",
              fill: "currentColor",
            }}
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(value, name, props) => [
              `${value}%`,
              props.payload.name,
            ]}
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
            labelStyle={{ color: "black" }}
            itemStyle={{ color: "black" }}
          />

          {/* Legend */}
          <Legend
            verticalAlign="top"
            wrapperStyle={{ fontSize: "12px" }}
            formatter={() => (
              <span className="text-gray-900 dark:text-gray-100 text-sm">
                Incident %
              </span>
            )}
          />

          {/* Bars */}
          <Bar dataKey="value" name="Incident %" barSize={25} radius={[6, 6, 0, 0]}>
            {natureOfEventData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NatureOfEventChart;
