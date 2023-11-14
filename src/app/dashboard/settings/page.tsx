import Link from "next/link";

export default function DashboardSettings() {
  return (
      <div className="flex justify-center items-center h-screen gap-1">
        <h1 className="text-white">Dashboard Settings</h1>
        <Link className="dashboard-button" href="/">
          Back to home
        </Link>
      </div>
  );
}
