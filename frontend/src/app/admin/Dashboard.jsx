// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Components/Header';
import StatsCard from './Components/StatsCard';


export default function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      percentage: '+20.1% from last month',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'New Users',
      value: '+2350',
      percentage: '+180.1% from last month',
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    },
    {
      title: 'Pending Orders',
      value: '+12,234',
      percentage: '+19% from last month',
      iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Active Users',
      value: '+573',
      percentage: '+201 since last hour',
      iconPath: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
    }
  ];

  return (
   
    
      <div className="flex flex-col">
       
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                percentage={stat.percentage}
                iconPath={stat.iconPath}
              />
            ))}
          </div>
          <div className="border shadow-sm rounded-lg p-2">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[100px]">Order</th>
                  <th className="min-w-[150px]" />
                </tr>
              </thead>
            </table>
          </div>
        </main>
      </div>
  
  );
}
