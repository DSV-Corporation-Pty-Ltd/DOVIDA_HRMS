import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-text-secondary dark:text-dm-text-secondary bg-background dark:bg-dm-background rounded-md border border-border dark:border-dm-border hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeftIcon className="w-4 h-4" />
        <span>Previous</span>
      </button>

      <span className="text-sm text-text-secondary dark:text-dm-text-secondary">
        Page{' '}
        <span className="font-bold text-text-primary dark:text-dm-text-primary">
          {currentPage}
        </span>{' '}
        of{' '}
        <span className="font-bold text-text-primary dark:text-dm-text-primary">
          {totalPages}
        </span>
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-text-secondary dark:text-dm-text-secondary bg-background dark:bg-dm-background rounded-md border border-border dark:border-dm-border hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span>Next</span>
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
