import React from "react";
import GenderSplitChart from "./charts/GenderSplitChart";
import EthnicitySplitChart from "./charts/EthnicitySplitChart";
import GenderByDesignationChart from "./charts/GenderByDesignationChart";
import GenderSplitRoleClassificationChart from "./charts/GenderSplitRoleClassificationChart";
import Statelocationcount from "./charts/statelocationcount";
import Countrylocationcount from "./charts/Countrylocationcount";
import TrendInRemunerationChart from "./charts/TrendInRemunerationChart";
import AverageHoursChart from "./charts/AverageHoursChart";

const Analytics = () => {
  return (
    <div className="space-y-10 text-black dark:text-white">
      {/* Gender & Ethnicity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GenderSplitChart />
        <EthnicitySplitChart />
      </div>

      {/* Gender by Designation */}
      <GenderByDesignationChart />

      <GenderSplitRoleClassificationChart />

      <Statelocationcount />
      <Countrylocationcount />
      <TrendInRemunerationChart />
      <AverageHoursChart />
    </div>
  );
};

export default Analytics;
