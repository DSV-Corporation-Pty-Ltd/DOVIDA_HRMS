import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const genderByDesignationData = [
  { designation: "Manager", Male: 30, Female: 20, Other: 5 },
  { designation: "Developer", Male: 40, Female: 35, Other: 10 },
  { designation: "Analyst", Male: 25, Female: 30, Other: 5 },
  { designation: "Intern", Male: 10, Female: 15, Other: 2 },
];

const GenderByDesignationChart = () => {
  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col">
      <h3 className="text-lg font-bold mb-1">Gender Split by Designation</h3>
      <p className="text-xs mb-4">Distribution of gender across designations</p>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={genderByDesignationData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="designation" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Male" stackId="a" fill="#3B82F6" radius={[0, 5, 5, 0]} />
          <Bar dataKey="Female" stackId="a" fill="#EC4899" radius={[0, 5, 5, 0]} />
          <Bar dataKey="Other" stackId="a" fill="#F59E0B" radius={[0, 5, 5, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderByDesignationChart;
