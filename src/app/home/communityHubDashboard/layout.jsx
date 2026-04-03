import Sidebar from "@/components/CommunityHubDashboard/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FB] text-gray-900">
      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}