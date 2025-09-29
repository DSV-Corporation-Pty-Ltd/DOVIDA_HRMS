import React, { useState, useMemo } from "react";
import { TASKS, USERS } from "../constants";
import { TaskStatus } from "../types";
import { XMarkIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

const CURRENT_USER_ID = 1;

const TaskManagement = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignedTo: 0,
    dueDate: "",
  });

  const usersMap = useMemo(() => {
    return USERS.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: name === "assignedTo" ? parseInt(value) : value,
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.assignedTo) return;

    const today = new Date().toISOString().split("T")[0];
    const newId = Math.max(0, ...tasks.map((t) => t.id)) + 1;

    const taskToAdd = {
      id: newId,
      ...newTask,
      dueDate: newTask.dueDate || today,
      assignedBy: CURRENT_USER_ID,
      assignedTo: Number(newTask.assignedTo),
      status: TaskStatus.ToDo,
      comments: [],
    };
    setTasks((prev) => [taskToAdd, ...prev]);
    setNewTask({ title: "", description: "", assignedTo: 0, dueDate: "" });
    setIsDrawerOpen(false);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const getStatusChip = (status) => {
    const colors = {
      [TaskStatus.ToDo]:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400",
      [TaskStatus.InProgress]:
        "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400",
      [TaskStatus.Done]:
        "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400",
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
        {status}
      </span>
    );
  };

  const renderTaskTable = (list) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left table-fixed">
        <thead className="bg-background dark:bg-dm-background/50">
          <tr className="border-b border-border dark:border-dm-border">
            <th className="p-4 font-semibold text-sm w-[200px]">Task</th>
            <th className="p-4 font-semibold text-sm w-[160px]">Assigned To</th>
            <th className="p-4 font-semibold text-sm w-[120px]">Status</th>
            <th className="p-4 font-semibold text-sm w-[140px]">Due Date</th>
            <th className="p-4 font-semibold text-sm w-[60px]"></th>
          </tr>
        </thead>
        <tbody>
          {list.map((task) => (
            <tr
              key={task.id}
              className="border-b border-border dark:border-dm-border last:border-b-0 hover:bg-background dark:hover:bg-dm-background/50"
            >
              {/* Task Title */}
              <td className="p-4 font-medium truncate overflow-hidden whitespace-nowrap">
                {task.title}
              </td>

              {/* Assigned To */}
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={usersMap[task.assignedTo]?.avatar}
                    alt={usersMap[task.assignedTo]?.name}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <span className="text-sm truncate overflow-hidden whitespace-nowrap max-w-[100px]">
                    {usersMap[task.assignedTo]?.name}
                  </span>
                </div>
              </td>

              {/* Status */}
              <td className="p-4">{getStatusChip(task.status)}</td>

              {/* Due Date */}
              <td className="p-4 text-sm text-text-secondary dark:text-dm-text-secondary truncate overflow-hidden whitespace-nowrap">
                {task.dueDate}
              </td>

              {/* Delete */}
              <td className="p-4">
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const sentTasks = tasks.filter((t) => t.assignedBy === CURRENT_USER_ID);
  const receivedTasks = tasks.filter((t) => t.assignedTo === CURRENT_USER_ID);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-text-primary dark:text-dm-text-primary">
          Task Management
        </h1>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary-hover"
        >
          <PlusIcon className="w-5 h-5" />
          Add Task
        </button>
      </div>

      {/* Assigned Tasks (Sent) */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border-t-4 border-blue-500">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/30 rounded-t-xl">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">Tasks I Assigned</h2>
        </div>
        {renderTaskTable(sentTasks)}
      </div>

      {/* Received Tasks */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border-t-4 border-green-500">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-green-900/30 rounded-t-xl">
          <h2 className="text-xl font-bold text-green-700 dark:text-green-300">Tasks Assigned To Me</h2>
        </div>
        {renderTaskTable(receivedTasks)}
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-96 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50
     bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 
     shadow-2xl border-l border-gray-200 dark:border-gray-700 flex flex-col`}
      >
        {/* Accent Bar */}
        <div className="h-1 w-full bg-primary"></div>

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add New Task</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Form (fills remaining space, scrollable) */}
        <form
          onSubmit={handleAddTask}
          className="flex-1 p-6 space-y-6 overflow-y-auto"
        >
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              placeholder="Enter task title"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                   placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
              placeholder="Enter task details..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                   placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              rows="3"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Assign To
            </label>
            <select
              name="assignedTo"
              value={newTask.assignedTo}
              onChange={handleInputChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                   focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value={0} disabled>
                Select User
              </option>
              {USERS.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Due Date (optional)
            </label>
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                   focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg 
                 hover:bg-primary-hover transition-colors"
          >
            Save Task
          </button>
        </form>
      </div>


      {/* Background overlay */}
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </div>
  );
};

export default TaskManagement;
