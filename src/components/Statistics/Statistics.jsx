import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const Assigments = [
    { id: 1, name: "Assignment-1", marks: 57 },
    { id: 2, name: "Assignment-2", marks: 56 },
    { id: 3, name: "Assignment-3", marks: 59 },
    { id: 4, name: "Assignment-4", marks: 60 },
    { id: 5, name: "Assignment-5", marks: 60 },
    { id: 6, name: "Assignment-6", marks: 60 },
    { id: 7, name: "Assignment-7", marks: 60 },
    { id: 8, name: "Assignment-8", marks: 60 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className=" text-center my-12 font-bold text-2xl text-purple-600">Assignment Analytics</h1>
      <div className="my-16 w-full" style={{height: 500 }}>
      <ResponsiveContainer>
        <AreaChart data={Assigments}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            fill="#969ce275"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Dashboard;
