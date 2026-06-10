

import TabsNav from "@/components/CommunityHubDashboard/ElectionCycle/TabsNav";
import Sidebar from "@/components/CommunityHubDashboard/ElectionCycle/Sidebar";

export default function ElectionCycleLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Top Nav */}
          <TabsNav />
    

      {/* Main Layout */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 py-8 gap-8">
        
        <main className="flex-1">
          {children}
        </main>

        <aside className="w-[320px] hidden lg:block">
          <Sidebar />
        </aside>
      </div>

    </div>
  );
}