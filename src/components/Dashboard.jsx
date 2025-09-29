import React, { useState, useMemo } from "react";
import { USERS, COUNTRIES } from "../constants";
import { PerformanceRating } from "../types";
import { UserIcon, EventIcon } from "./icons";
import LiveMap from "./LiveMap";
import StatCard from "./StatCard";
import CountryCard from "./CountryCard";
import Analytics from "./Analytics";

const Dashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredUsers =
    selectedCountry === "All"
      ? USERS
      : USERS.filter((u) => u.country === selectedCountry);

  const performanceData = useMemo(
    () =>
      Object.values(PerformanceRating).map((r) => ({
        name: r,
        value: filteredUsers.filter((u) => u.performance === r).length,
      })),
    [filteredUsers]
  );

  const employeeData = useMemo(
    () =>
      COUNTRIES.map((c) => ({
        country: c.name,
        employees: USERS.filter((u) => u.country === c.name).length,
      })),
    []
  );

  const lineData = useMemo(
    () =>
      ["2020", "2021", "2022", "2023", "2024"].map((year) => ({
        year,
        employees: Math.floor(Math.random() * 100 + 20),
      })),
    [selectedCountry]
  );

  const taskData = useMemo(
    () => [
      { status: "To Do", value: Math.floor(Math.random() * 50 + 20), fill: "#f59e0b" },
      { status: "In Progress", value: Math.floor(Math.random() * 50 + 30), fill: "#3b82f6" },
      { status: "Done", value: Math.floor(Math.random() * 50 + 40), fill: "#22c55e" },
      { status: "Blocked", value: Math.floor(Math.random() * 20 + 5), fill: "#ef4444" },
    ],
    [selectedCountry]
  );

  return (
    <div className="space-y-12">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Employees"
          value={filteredUsers.length}
          info="Across region"
          icon={<UserIcon className="w-6 h-6 text-primary" />}
          color="bg-primary-light"
        />
        <StatCard
          title="Countries"
          value={selectedCountry === "All" ? COUNTRIES.length : 1}
          info="Operational"
          icon={<span className="text-2xl">🌍</span>}
          color="bg-green-100 dark:bg-green-500/20"
        />
        <StatCard
          title="Leave Balance"
          value={Math.floor(Math.random() * 200)}
          info="Leaves available"
          icon={<span className="text-2xl">🗓️</span>}
          color="bg-purple-100 dark:bg-purple-500/20"
        />
        <StatCard
          title="Today's Events"
          value={Math.floor(Math.random() * 5)}
          info="Birthdays & Anniversaries"
          icon={<EventIcon className="w-6 h-6 text-pink-500" />}
          color="bg-pink-100 dark:bg-pink-500/20"
        />
      </div>

      {/* Countries */}
      <h2 className="text-2xl font-bold mb-6">Countries Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COUNTRIES.map((country) => {
          const countryUsers = USERS.filter((u) => u.country === country.name);
          return (
            <CountryCard key={country.name} country={country} users={countryUsers} />
          );
        })}
      </div>
      <div className="flex justify-end mt-6">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-background dark:bg-dm-background"
        >
          <option value="All">All Countries</option>
          {COUNTRIES.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Analytics */}
      <Analytics
        employeeData={employeeData}
        performanceData={performanceData}
        taskData={taskData}
      />

      {/* Live Map */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Global Status Map</h3>
        <LiveMap />
      </div>
    </div>
  );
};

export default Dashboard;
