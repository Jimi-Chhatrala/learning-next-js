import Component1 from "@/components/component1";
import LineChart from "./line-chart";

function BarChart() {
  return <h1>Bar Chart</h1>;
}

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <BarChart />
      <LineChart />
      <Component1 />
    </>
  );
}
