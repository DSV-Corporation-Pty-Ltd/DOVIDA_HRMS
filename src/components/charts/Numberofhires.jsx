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

// Dummy Data (Replace with real counts)
const profileData = [
  { year: 2008, Caregiver: 120, KeyPlayer: 80 },
  { year: 2009, Caregiver: 140, KeyPlayer: 90 },
  { year: 2010, Caregiver: 160, KeyPlayer: 110 },
  { year: 2011, Caregiver: 180, KeyPlayer: 120 },
  { year: 2012, Caregiver: 200, KeyPlayer: 130 },
  { year: 2013, Caregiver: 220, KeyPlayer: 150 },
  { year: 2014, Caregiver: 250, KeyPlayer: 170 },
  { year: 2015, Caregiver: 270, KeyPlayer: 190 },
  { year: 2016, Caregiver: 300, KeyPlayer: 200 },
  { year: 2017, Caregiver: 320, KeyPlayer: 220 },
  { year: 2018, Caregiver: 350, KeyPlayer: 240 },
  { year: 2019, Caregiver: 370, KeyPlayer: 260 },
  { year: 2020, Caregiver: 390, KeyPlayer: 280 },
  { year: 2021, Caregiver: 410, KeyPlayer: 300 },
  { year: 2022, Caregiver: 430, KeyPlayer: 320 },
  { year: 2023, Caregiver: 450, KeyPlayer: 340 },
  { year: 2024, Caregiver: 480, KeyPlayer: 360 },
  { year: 2025, Caregiver: 500, KeyPlayer: 380 },
];

const ProfileGrowthChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col text-gray-900 dark:text-gray-100">
      <h3 className="text-lg font-bold mb-1">Profile Growth – Caregiver vs Key Player</h3>
      <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">2008 to 2025</p>

      <ResponsiveContainer width="100%" height={430}>
        <BarChart
          data={profileData}
          margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
        >
          <defs>
            <linearGradient id="gradCaregiver" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="gradKeyPlayer" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
          <XAxis dataKey="year" tick={{ fill: "currentColor" }} />
          <YAxis
            domain={[0, 600]}
            tick={{ fill: "currentColor" }}
            label={{
              value: "Profile Count",
              angle: -90,
              position: "insideLeft",
              fill: "currentColor",
            }}
          />
          <Tooltip
            formatter={(value, name) => [`${value} Profiles`, name]}
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
          />
          <Legend />

          <Bar dataKey="Caregiver" stackId="a" fill="url(#gradCaregiver)" barSize={35} radius={[6, 6, 0, 0]} />
          <Bar dataKey="KeyPlayer" stackId="a" fill="url(#gradKeyPlayer)" barSize={35} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfileGrowthChart;
