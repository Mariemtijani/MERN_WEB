// components/StatsCard.js
import React from 'react';

export default function StatsCard({ title, value, percentage, iconPath }) {
  return (
    <div className="border rounded-lg shadow-sm p-4">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <svg
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={iconPath} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{percentage}</p>
      </div>
    </div>
  );
}
