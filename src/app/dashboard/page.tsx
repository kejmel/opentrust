import Link from "next/link";

export default function Dashboard() {
  
    return (
      <div className="flex justify-center items-center h-screen gap-1">
        <h1 className="text-white">Dashboard</h1>
        <Link className="dashboard-button" href="/dashboard/settings">Dashboard settings</Link>
      </div>
    );
  }