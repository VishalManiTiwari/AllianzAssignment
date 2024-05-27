import React from 'react';

const Dashboard = () => {
  const data = [
    { rank: 1, name: 'Selling with re entr', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, price: 500, action: 'Buy' },
    { rank: 3, name: 'Based on premium and', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, price: '-', action: 'View' },
    { rank: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: 0.49, price: '-', action: 'View' },
    { rank: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: 0.60, price: '-', action: 'View' },
    { rank: 8, name: 'Wait and trade_Save', calmarRatio: 2.62, overallProfit: 178252.5, avgDailyProfit: 161.9, winPercentage: 0.63, price: '-', action: 'View' },
    { rank: 9, name: 'iron condor', calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 10, name: 'strategy_name', calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercentage: 0.62, price: '-', action: 'View' },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-600">LeaderBoards</h1>
      <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Basic Backtest</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg custom-scrollbar">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Rank</th>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Calmar Ratio</th>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Overall Profit</th>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Avg. Daily Profit</th>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Win % (Day)</th>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Price (Rs)</th>
              <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="py-3 px-4 text-center text-sm font-medium">{row.rank}</td>
                <td className="py-3 px-4 text-sm">{row.name}</td>
                <td className="py-3 px-4 text-center text-sm">
                  <span className="flex items-center justify-center">
                    <span className="mr-1 text-green-500">↑</span>{row.calmarRatio}
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-sm font-medium">{row.overallProfit.toLocaleString()}</td>
                <td className="py-3 px-4 text-right text-sm font-medium">{row.avgDailyProfit}</td>
                <td className="py-3 px-4 text-center text-sm">{row.winPercentage}</td>
                <td className="py-3 px-4 text-center text-sm">{row.price}</td>
                <td className="py-3 px-4 text-center">
                  <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full text-sm hover:bg-blue-700 transition-colors duration-200">
                    {row.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='bg-white p-3 relative top-[3px] rounded-b-xl shadow-xl'>

      </div>
    </div>
  );
};

export default Dashboard;
