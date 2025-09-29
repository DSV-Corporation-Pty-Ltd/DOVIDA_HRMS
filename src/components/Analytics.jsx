import React from "react";
import GenderSplitChart from "./charts/GenderSplitChart";
import EthnicitySplitChart from "./charts/EthnicitySplitChart";
import GenderByDesignationChart from "./charts/GenderByDesignationChart";
import GenderSplitRoleClassificationChart from "./charts/GenderSplitRoleClassificationChart";
import Statelocationcount from "./charts/statelocationcount";
import Countrylocationcount from "./charts/Countrylocationcount";
import TrendInRemunerationChart from "./charts/TrendInRemunerationChart";
import AverageHoursChart from "./charts/AverageHoursChart";
import DashboardTurnoverChart from "./charts/DashboardTurnoverChart";
import TurnoverTenureChart from "./charts/TurnoverTenureChart";
import TurnoverByPositionChart from "./charts/TurnoverByPositionChart";
import NetDifferenceChart from "./charts/NetDifferenceChart";
import IncidentDoughnutChart from "./charts/IncidentDoughnutChart";
import IncidentClassificationChart from "./charts/IncidentClassificationChart";
import NatureOfEventChart from "./charts/NatureOfEventChart";

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AverageHoursChart />
        <DashboardTurnoverChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <TurnoverTenureChart />
        </div>
        <div className="lg:col-span-8">
          <TurnoverByPositionChart />
        </div>
      </div>

      <NetDifferenceChart />


      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <IncidentClassificationChart />
        </div>
        <div className="lg:col-span-4">
          <IncidentDoughnutChart />
        </div>
      </div>


      <NatureOfEventChart />



    </div>
  );
};

export default Analytics;
