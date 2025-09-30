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

// Dummy Monthly Data — Replace with real values
const hiresData = [
  { month: "Jan", Male: 12, Female: 15, PreferNot: 1 },
  { month: "Feb", Male: 10, Female: 14, PreferNot: 2 },
  { month: "Mar", Male: 18, Female: 17, PreferNot: 0 },
  { month: "Apr", Male: 14, Female: 12, PreferNot: 1 },
  { month: "May", Male: 20, Female: 22, PreferNot: 1 },
  { month: "Jun", Male: 16, Female: 14, PreferNot: 3 },
  { month: "Jul", Male: 19, Female: 18, PreferNot: 2 },
  { month: "Aug", Male: 22, Female: 20, PreferNot: 1 },
  { month: "Sep", Male: 17, Female: 15, PreferNot: 2 },
  { month: "Oct", Male: 21, Female: 19, PreferNot: 1 },
  { month: "Nov", Male: 15, Female: 16, PreferNot: 0 },
  { month: "Dec", Male: 18, Female: 20, PreferNot: 2 },
];

const HiresGenderBarChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md text-gray-900 dark:text-gray-100">
      <h3 className="text-lg font-bold mb-1">Number of Hires in 2025 (Gender Wise)</h3>
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">Monthly breakdown</p>

      {/* Scrollable Wrapper */}
      <div className="overflow-x-auto" style={{ width: "100%" }}>
        <div style={{ width: "1400px", height: "400px" }}>
          <ResponsiveContainer>
            <BarChart
              data={hiresData}
              margin={{ top: 10, right: 20, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
              <XAxis dataKey="month" tick={{ fill: "currentColor" }} />
              <YAxis
                tick={{ fill: "currentColor" }}
                label={{
                  value: "Gender Count",
                  angle: -90,
                  position: "insideLeft",
                  fill: "currentColor",
                }}
              />
              <Tooltip
                formatter={(value, name) => [`${value} Hires`, name]}
                contentStyle={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid #E5E7EB",
                  borderRadius: "6px",
                }}
              />
              <Legend
                formatter={(value) => (
                  <span className="text-gray-900 dark:text-gray-100 text-sm">{value}</span>
                )}
              />
              <Bar dataKey="Male" fill="#3B82F6" name="Male" barSize={20} />
              <Bar dataKey="Female" fill="#EC4899" name="Female" barSize={20} />
              <Bar dataKey="PreferNot" fill="#A3A3A3" name="Prefer not to say" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HiresGenderBarChart;
