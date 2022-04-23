import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Январь",
    uv: 10,
    pv: 8,
    amt: 2400
  },
  {
    name: "Фефраль",
    uv: 6,
    pv: 8,
    amt: 2210
  },
  {
    name: "Март",
    uv: 10,
    pv: 3,
    amt: 2290
  },
  {
    name: "Апрель",
    uv: 5,
    pv: 6,
    amt: 2000
  }
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Bar dataKey="pv" fill="#8884d8"/>
      <Bar dataKey="uv" fill="#82ca9d"/>
    </BarChart>
  );
}