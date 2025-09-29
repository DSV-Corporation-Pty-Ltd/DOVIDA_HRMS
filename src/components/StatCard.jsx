import React from "react";

const StatCard = ({ title, value, info, icon, color }) => (
  <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-between">
    <div className={`p-4 rounded-full flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div className="flex flex-col items-end ml-4">
      <p className="text-3xl font-extrabold text-text-primary dark:text-dm-text-primary">
        {value}
      </p>
      <p className="text-sm font-semibold text-text-secondary dark:text-dm-text-secondary">
        {title}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 italic">{info}</p>
    </div>
  </div>
);

export default StatCard;
