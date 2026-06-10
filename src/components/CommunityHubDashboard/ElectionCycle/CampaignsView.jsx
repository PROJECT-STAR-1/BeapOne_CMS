import { Mic } from "lucide-react";

export default function CampaignsView() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center max-w-4xl mx-auto">
      
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-full p-3">
          <Mic className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-3">
        Candidate Town Halls
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
        The vetting phase is complete. Review the manifests and join the live
        Q&amp;A sessions before the voting window opens.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            MARCH 15
          </p>
          <p className="font-medium text-gray-900">
            Hub O Town Hall
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            MARCH 16
          </p>
          <p className="font-medium text-gray-900">
            Hub P Town Hall
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            MARCH 17
          </p>
          <p className="font-medium text-gray-900">
            Global Governance
          </p>
        </div>

      </div>
    </div>
  );
}