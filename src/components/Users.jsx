import React, { useState, useMemo } from 'react';
import { USERS, COUNTRIES } from '../constants';
import { SearchIcon, FilterIcon } from './icons';
import Pagination from './Pagination';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const filteredUsers = useMemo(() => {
    return USERS.filter(user => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch =
        user.name.toLowerCase().includes(lowerSearch) ||
        user.email.toLowerCase().includes(lowerSearch) ||
        user.position.toLowerCase().includes(lowerSearch);

      const matchesCountry = countryFilter === 'all' || user.country === countryFilter;

      return matchesSearch && matchesCountry;
    });
  }, [searchTerm, countryFilter]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-text-primary dark:text-dm-text-primary">
        User Management
      </h1>

      <div className="bg-card dark:bg-dm-card p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-2/3 lg:w-1/3">
          <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary dark:text-dm-text-secondary" />
          <input
            type="text"
            placeholder="Search by name, email, or position..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-background dark:bg-dm-background border border-border dark:border-dm-border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="relative w-full md:w-auto">
          <FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary dark:text-dm-text-secondary" />
          <select
            value={countryFilter}
            onChange={e => {
              setCountryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full md:w-48 bg-background dark:bg-dm-background border border-border dark:border-dm-border rounded-lg pl-10 pr-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Countries</option>
            {COUNTRIES.map(country => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-card dark:bg-dm-card rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-background dark:bg-dm-background/50">
              <tr className="border-b border-border dark:border-dm-border">
                <th className="p-4 font-semibold text-sm">Name</th>
                <th className="p-4 font-semibold text-sm">Position</th>
                <th className="p-4 font-semibold text-sm">Country</th>
                <th className="p-4 font-semibold text-sm">Contact</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map(user => (
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
                    <td className="p-4">
                      <a
                        href={`mailto:${user.email}`}
                        className="text-primary hover:underline"
                      >
                        {user.email}
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center p-8 text-text-secondary dark:text-dm-text-secondary"
                  >
                    No users found.
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

export default Users;
