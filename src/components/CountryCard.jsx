import React from "react";

const CountryCard = ({ country, users }) => (
  <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
    <div className="flex justify-between items-start mb-6">
      <span className="text-5xl">{country.flag}</span>
      <div className="text-right">
        <p className="font-bold text-lg">{country.name}</p>
        <p className="text-xs text-text-secondary">Country Head</p>
        <p className="text-sm font-medium text-primary">{country.headEmail}</p>
      </div>
    </div>
    <div className="flex items-center justify-between mt-auto">
      <div className="flex -space-x-3 overflow-hidden">
        {users.slice(0, 5).map((user) => (
          <img
            key={user.id}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-card dark:ring-dm-card"
            src={user.avatar}
            alt={user.name}
            title={user.name}
          />
        ))}
      </div>
      <p className="text-base font-semibold text-text-secondary">
        {users.length} Employees
      </p>
    </div>
  </div>
);

export default CountryCard;
