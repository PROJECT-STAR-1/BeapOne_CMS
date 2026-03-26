import Header from "@/components/AffiliateDashboard/Headers";
import Navbar from "@/components/AffiliateDashboard/Navbar";
import { ExternalLink, Monitor, FileText, Video, Globe, Zap } from "lucide-react";

function Card({ title, type, sub, icon: Icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">
      
      {/* Top Row */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100">
          <Icon size={18} className="text-gray-600" />
        </div>

        <span className="text-[10px] tracking-widest text-blue-500 font-semibold uppercase">
          {type}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{sub}</p>

      {/* Actions */}
      <div className="flex gap-3 mt-5">
        <button className="flex-1 bg-[#1C1F3A] text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90">
          Download
        </button>
        <button className="border border-gray-200 p-2.5 rounded-lg hover:bg-gray-50">
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Header Section */}
        <div className="mb-6">
         <Header />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Professional Hub Hero"
            type="Banner"
            sub="1200×600 px"
            icon={Monitor}
          />
          <Card
            title="LinkedIn Growth Thread"
            type="Social Copy"
            sub="Templates"
            icon={Globe}
          />
          <Card
            title="UBOS 2.5 Quick Demo"
            type="Video"
            sub="1080p MP4"
            icon={Video}
          />
          <Card
            title="Sidebar Promotion v2"
            type="Banner"
            sub="300×250 px"
            icon={Monitor}
          />
          <Card
            title="Email Campaign Template"
            type="Copy"
            sub="HTML/Text"
            icon={FileText}
          />
          <Card
            title="Referral Story (Testimonial)"
            type="Video"
            sub="Reels/Shorts"
            icon={Zap}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between text-xs text-gray-400 mt-10">
          <span>© A2.7.A COMPLIANT | JOURNAL AFFILIATE OP ENABLED</span>
          <span>Last automated commission calculation: Today, 00:00 UTC</span>
        </div>
      </div>
    </div>
  );
}