import { useState } from "react";

const hours = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const App = () => {
  return (
    <div className="p-4">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Time</th>
            {days.map((day) => (
              <th key={day} className="border-l border-r px-4 py-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="border px-4 py-2">{hour}</td>
              {days.map((day) => (
                <td
                  key={`${day}-${hour}`}
                  className="border-l border-r px-4 py-2"
                >
                  {/* Cell content here */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
