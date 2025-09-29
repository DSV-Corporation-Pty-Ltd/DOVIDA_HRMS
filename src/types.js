// Constants
export const CountryName = {
  USA: 'USA',
  Canada: 'Canada',
  UK: 'United Kingdom',
  Australia: 'Australia',
};

export const TaskStatus = {
  ToDo: 'To Do',
  InProgress: 'In Progress',
  Done: 'Done',
};

export const PerformanceRating = {
  Excellent: 'Excellent',
  Good: 'Good',
  Average: 'Average',
  NeedsImprovement: 'Needs Improvement',
};

// JSDoc typedefs (optional, for autocomplete in VSCode)
/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {string} country
 * @property {string} position
 * @property {string} avatar
 * @property {string} performance
 * @property {string} dob - YYYY-MM-DD
 * @property {string} anniversary - YYYY-MM-DD
 */

/**
 * @typedef {Object} Country
 * @property {string} name
 * @property {string} headEmail
 * @property {string} flag
 */

/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {number} assignedTo
 * @property {string} status
 * @property {string} dueDate
 */

/**
 * @typedef {Object} Event
 * @property {number} id
 * @property {number} userId
 * @property {'Birthday'|'Anniversary'} type
 */
