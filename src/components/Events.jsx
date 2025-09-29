import React, { useState, useMemo } from "react";
import { CakeIcon, PartyPopperIcon } from "./icons";

// ===== Dummy Countries =====
const COUNTRIES = [
  { name: "USA", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Ireland", flag: "🇮🇪" },
];

// ===== Dummy Users =====
const generateDummyUsers = () => {
  return COUNTRIES.flatMap((c, idx) =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: `${c.name}-emp-${i}`,
      name: `${c.name} Employee ${i + 1}`,
      position: ["Engineer", "Manager", "Designer", "QA", "HR"][i % 5],
      avatar: `https://i.pravatar.cc/150?img=${(idx * 20 + i) % 70}`,
      dob: `199${i % 10}-0${((i % 9) + 1)}-15`,
      anniversary: `201${i % 10}-0${(((i + 3) % 9) + 1)}-10`,
      country: c.name,
    }))
  );
};
const DUMMY_USERS = generateDummyUsers();

// ===== Event Card =====
const EventCard = ({ user, type, wished, onWish }) => {
  const isBirthday = type === "Birthday";

  return (
    <div
      className={`w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border rounded-xl shadow-md p-4 transition-transform hover:scale-[1.02] ${
        wished ? "ring-2 ring-blue-500" : "border-transparent"
      }`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-14 h-14 rounded-full ring-2 ring-primary/50"
        />
        <div className="flex-1">
          <p className="font-bold text-base text-slate-900 dark:text-slate-100">
            {user.name}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {user.position}
          </p>
        </div>
        <div className="text-right">
          <div
            className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
              isBirthday
                ? "bg-pink-100 text-pink-800 dark:bg-pink-500/20 dark:text-pink-400"
                : "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-400"
            }`}
          >
            {isBirthday ? (
              <CakeIcon className="w-4 h-4" />
            ) : (
              <PartyPopperIcon className="w-4 h-4" />
            )}
            <span>{type}</span>
          </div>

          {!wished ? (
            <button
              onClick={() => onWish(user, type)}
              className="px-3 py-1 text-xs rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              Wish 🎉
            </button>
          ) : (
            <span className="text-xs font-semibold text-blue-500">✔ Wished</span>
          )}
        </div>
      </div>
    </div>
  );
};

// ===== Modal Component =====
const WishModal = ({ user, type, onClose, onSend }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-96 max-w-[90%] p-6 relative animate-fade-in">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
          Send {type} Wish 🎉
        </h2>

        <div className="flex items-center space-x-3 mb-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full ring-2 ring-blue-400"
          />
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {user.name}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {user.position}
            </p>
          </div>
        </div>

        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded-lg border bg-slate-50 dark:bg-slate-800 dark:border-slate-700 text-slate-800 dark:text-slate-100 mb-4 focus:ring-2 focus:ring-blue-500"
          placeholder={`Type your ${type.toLowerCase()} message...`}
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSend(user, type, message);
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

// ===== Events Page =====
const Events = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [wishedUsers, setWishedUsers] = useState({});
  const [modalUser, setModalUser] = useState(null);
  const [modalType, setModalType] = useState("");

  const thisMonth = new Date().getMonth();

  const filteredUsers =
    selectedCountry === "All"
      ? DUMMY_USERS
      : DUMMY_USERS.filter((u) => u.country === selectedCountry);

  const birthdays = useMemo(() => {
    return filteredUsers.filter(
      (u) => new Date(u.dob).getMonth() === thisMonth
    );
  }, [filteredUsers, thisMonth]);

  const anniversaries = useMemo(() => {
    return filteredUsers.filter(
      (u) => new Date(u.anniversary).getMonth() === thisMonth
    );
  }, [filteredUsers, thisMonth]);

  const handleWishClick = (user, type) => {
    setModalUser(user);
    setModalType(type);
  };

  const handleSendWish = (user, type, message) => {
    console.log(`Sent wish to ${user.name} for ${type}: ${message}`);
    setWishedUsers((prev) => ({ ...prev, [user.id + type]: true }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-sky-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Monthly Celebrations 🎉
        </h1>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white/80 dark:bg-slate-800/80 text-sm shadow-md text-slate-900 dark:text-slate-100"
        >
          <option value="All">All Countries</option>
          {COUNTRIES.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Events Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 overflow-hidden">
        {/* Birthdays */}
        <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900/30 dark:to-orange-900/20 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-pink-700 dark:text-pink-300">
            🎂 Birthdays
          </h2>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {birthdays.map((u) => (
              <EventCard
                key={u.id}
                user={u}
                type="Birthday"
                wished={wishedUsers[u.id + "Birthday"]}
                onWish={handleWishClick}
              />
            ))}
          </div>
        </div>

        {/* Anniversaries */}
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-900/30 dark:to-sky-900/20 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            🎊 Work Anniversaries
          </h2>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {anniversaries.map((u) => (
              <EventCard
                key={u.id}
                user={u}
                type="Anniversary"
                wished={wishedUsers[u.id + "Anniversary"]}
                onWish={handleWishClick}
              />
            ))}
          </div>
        </div>
      </div>

      {modalUser && (
        <WishModal
          user={modalUser}
          type={modalType}
          onClose={() => setModalUser(null)}
          onSend={handleSendWish}
        />
      )}

      {/* Scrollbar styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(100, 116, 139, 0.5);
          border-radius: 9999px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(148, 163, 184, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Events;
