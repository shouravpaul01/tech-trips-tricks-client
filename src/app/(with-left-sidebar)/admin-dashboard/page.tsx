"use client"
import { PostIcon } from "@/src/components/icons";
import { useTitle } from "@/src/hooks";
import { useGetMonthlyPayments } from "@/src/hooks/SubscriptionHook";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function AdminDashboardPage() {
  useTitle("Admin-Dashboard")
  const {data} =useGetMonthlyPayments()
  
  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center bg-purple-200 p-4 rounded-md shadow-xl">
          <div className="flex-1">
            <p className="font-bold  text-xl">Posts</p>
            <p className="font-bold text-xl">Total: 20</p>
          </div>
          <p>
            <PostIcon width={40} height={40} />
          </p>
        </div>
      </div>
      <div>
      <div>
      <div className="w-full h-[400px] mt-5" >
        <p className="text-xl font-bold border-b pb-2 mb-4">Monthly Payments</p>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="totalAmount" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
          </div>
      </div>
      </div>
    </div>
  );
}
