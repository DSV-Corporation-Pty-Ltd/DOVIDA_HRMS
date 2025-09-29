import React, { useMemo, useState } from 'react';
import { USERS, COUNTRIES } from '../constants';
import { FilterIcon, TrophyIcon } from './icons';
import Pagination from './Pagination';

const PerformanceManagement = () => {
  const [countryFilter, setCountryFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filteredUsers = useMemo(() => {
    return USERS.filter(user => {
      const matchesCountry = countryFilter === 'all' || user.country === countryFilter;
      const matchesRating = ratingFilter === 'all' || user.performance === ratingFilter;
      return matchesCountry && matchesRating;
    });
  }, [countryFilter, ratingFilter]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const topPerformer = useMemo(() => {
    const excellent = USERS.filter(u => u.performance === 'Excellent');
    return excellent.length > 0 ? excellent[Math.floor(Math.random() * excellent.length)] : null;
  }, []);

  const getRatingChip = (rating) => {
    const colors = {
      Excellent: 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400',
      Good: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400',
      Average: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400',
      NeedsImprovement: 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400',
    };
    return (
      <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${colors[rating]}`}>
        {rating}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-text-primary dark:text-dm-text-primary">
        Performance Management
      </h1>

      {topPerformer && (
        <div className="relative bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-xl shadow-lg text-white overflow-hidden">
          {/* Trophy Icon in background */}
          <TrophyIcon className="absolute -right-4 -bottom-8 w-32 h-32 text-white/20 transform rotate-12" />

          {/* Foreground content */}
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-4">Top Performer of the Month 🌟</h2>

            <div className="flex items-center justify-between">
              {/* Avatar + Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={topPerformer.avatar}
                  alt={topPerformer.name}
                  className="w-16 h-16 rounded-full border-4 border-white/50"
                />
                <div>
                  <p className="text-xl font-bold leading-tight">{topPerformer.name}</p>
                  <p className="font-medium text-sm">{topPerformer.position}</p>
                  <p className="text-xs opacity-80">{topPerformer.country}</p>
                </div>
              </div>

              {/* Rating Section */}
              <div className="text-right">
                <p className="text-base font-semibold">Rating</p>
                <p className="text-2xl font-extrabold">{topPerformer.performance}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-card dark:bg-dm-card rounded-xl shadow-md">
        <div className="p-4 border-b border-border dark:border-dm-border flex flex-wrap items-center gap-4">
          <h2 className="text-xl font-bold">Employee Performance</h2>
          <div className="relative">
            <FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary dark:text-dm-text-secondary" />
            <select
              onChange={(e) => {
                setCountryFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={countryFilter}
              className="pl-9 pr-4 py-2 text-sm bg-background dark:bg-dm-background border border-border dark:border-dm-border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Countries</option>
              {COUNTRIES.map(c => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">⭐</span>
            <select
              onChange={(e) => {
                setRatingFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={ratingFilter}
              className="pl-9 pr-4 py-2 text-sm bg-background dark:bg-dm-background border border-border dark:border-dm-border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Ratings</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="NeedsImprovement">Needs Improvement</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-background dark:bg-dm-background/50">
              <tr className="border-b border-border dark:border-dm-border">
                <th className="p-4 font-semibold text-sm">Employee</th>
                <th className="p-4 font-semibold text-sm">Position</th>
                <th className="p-4 font-semibold text-sm">Country</th>
                <th className="p-4 font-semibold text-sm text-center">
                  Performance Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map(user => (
                <tr
                  key={user.id}
                  className="border-b border-border dark:border-dm-border last:border-b-0 hover:bg-background dark:hover:bg-dm-background/50"
                >
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm text-text-secondary dark:text-dm-text-secondary">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-text-secondary dark:text-dm-text-secondary">
                    {user.position}
                  </td>
                  <td className="p-4 text-text-secondary dark:text-dm-text-secondary">
                    {user.country}
                  </td>
                  <td className="p-4 text-center">{getRatingChip(user.performance)}</td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center p-8 text-text-secondary dark:text-dm-text-secondary"
                  >
                    No matching employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="p-4 border-t border-border dark:border-dm-border">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceManagement;
