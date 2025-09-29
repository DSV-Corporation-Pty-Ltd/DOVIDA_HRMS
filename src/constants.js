import { TaskStatus, PerformanceRating } from './types';

// Countries
export const COUNTRIES = [
  { name: 'Australia', headEmail: 'head.au@dovida.com', flag: '🇦🇺' },
  { name: 'Switzerland', headEmail: 'head.ch@dovida.com', flag: '🇨🇭' },
  { name: 'Ireland', headEmail: 'head.ie@dovida.com', flag: '🇮🇪' },
  { name: 'Netherlands', headEmail: 'head.nl@dovida.com', flag: '🇳🇱' },
];

const getTodayDate = (year) => {
  const today = new Date();
  return `${year}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
    today.getDate()
  ).padStart(2, '0')}`;
};

// Users — distributed across countries differently
export const USERS = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@dovida.com',
    country: 'Australia',
    position: 'Frontend Developer',
    avatar: 'https://picsum.photos/seed/alice/100',
    performance: PerformanceRating.Excellent,
    dob: '1990-07-15',
    anniversary: getTodayDate(2020),
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob.w@dovida.com',
    country: 'Switzerland',
    position: 'Backend Developer',
    avatar: 'https://picsum.photos/seed/bob/100',
    performance: PerformanceRating.Good,
    dob: getTodayDate(1988),
    anniversary: '2019-03-10',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.b@dovida.com',
    country: 'Ireland',
    position: 'UI/UX Designer',
    avatar: 'https://picsum.photos/seed/charlie/100',
    performance: PerformanceRating.Average,
    dob: '1995-11-20',
    anniversary: '2021-08-01',
  },
  {
    id: 4,
    name: 'Diana Miller',
    email: 'diana.m@dovida.com',
    country: 'Netherlands',
    position: 'Project Manager',
    avatar: 'https://picsum.photos/seed/diana/100',
    performance: PerformanceRating.NeedsImprovement,
    dob: '1985-02-28',
    anniversary: '2018-05-15',
  },
  {
    id: 5,
    name: 'Ethan Garcia',
    email: 'ethan.g@dovida.com',
    country: 'Australia',
    position: 'QA Engineer',
    avatar: 'https://picsum.photos/seed/ethan/100',
    performance: PerformanceRating.Good,
    dob: '1992-09-05',
    anniversary: '2022-01-20',
  },
  {
    id: 6,
    name: 'Fiona Clark',
    email: 'fiona.c@dovida.com',
    country: 'Switzerland',
    position: 'DevOps Engineer',
    avatar: 'https://picsum.photos/seed/fiona/100',
    performance: PerformanceRating.Excellent,
    dob: getTodayDate(1993),
    anniversary: getTodayDate(2023),
  },
  {
    id: 7,
    name: 'George Lewis',
    email: 'george.l@dovida.com',
    country: 'Ireland',
    position: 'Data Scientist',
    avatar: 'https://picsum.photos/seed/george/100',
    performance: PerformanceRating.NeedsImprovement,
    dob: '1989-06-12',
    anniversary: '2020-10-01',
  },
  {
    id: 8,
    name: 'Hannah Scott',
    email: 'hannah.s@dovida.com',
    country: 'Netherlands',
    position: 'HR Manager',
    avatar: 'https://picsum.photos/seed/hannah/100',
    performance: PerformanceRating.Average,
    dob: '1991-04-22',
    anniversary: '2017-02-11',
  },
  {
    id: 9,
    name: 'Isaac Turner',
    email: 'isaac.t@dovida.com',
    country: 'Australia',
    position: 'Cloud Engineer',
    avatar: 'https://picsum.photos/seed/isaac/100',
    performance: PerformanceRating.Good,
    dob: '1994-03-10',
    anniversary: '2023-07-19',
  },
];

// Tasks — varied by country
export const TASKS = [
  { id: 1, title: 'Deploy frontend update', assignedTo: 1, status: TaskStatus.InProgress, dueDate: '2024-08-15' },
  { id: 2, title: 'Design new landing page', assignedTo: 3, status: TaskStatus.ToDo, dueDate: '2024-08-20' },
  { id: 3, title: 'Setup CI/CD pipeline', assignedTo: 6, status: TaskStatus.Done, dueDate: '2024-07-30' },
  { id: 4, title: 'Plan Q4 marketing campaign', assignedTo: 9, status: TaskStatus.InProgress, dueDate: '2024-08-25' },
  { id: 5, title: 'API performance testing', assignedTo: 2, status: TaskStatus.ToDo, dueDate: '2024-08-18' },
  { id: 6, title: 'Build analytics dashboard', assignedTo: 4, status: TaskStatus.InProgress, dueDate: '2024-08-22' },
  { id: 7, title: 'Run load tests', assignedTo: 8, status: TaskStatus.Done, dueDate: '2024-07-25' },
];

// Events
export const EVENTS = USERS.map(user => [
  { id: user.id * 2 - 1, userId: user.id, type: 'Birthday' },
  { id: user.id * 2, userId: user.id, type: 'Anniversary' },
]).flat();
