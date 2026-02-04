// components/ModulesSection.jsx
export default function ModulesSection() {
  const modules = [
    { title: "Customer Management", color: "bg-indigo-900" },
    { title: "Financial Management", color: "bg-emerald-600" },
    { title: "Supply Chain Management", color: "bg-red-600" },
    { title: "Project & Program Management", color: "bg-yellow-500" },
    { title: "Org Structure Mgt", color: "bg-emerald-600" },
    { title: "Work Management", color: "bg-indigo-900" },
    { title: "E-commerce", color: "bg-yellow-500" },
    { title: "Real Estate Management", color: "bg-red-600" },
    { title: "Manufacturing Management", color: "bg-yellow-500" },
    { title: "Pharmacy & Healthcare", color: "bg-red-600" },
    { title: "Cooperative Management", color: "bg-emerald-600" },
    { title: "Incubation Management", color: "bg-indigo-900" },
  ];

  return (
    <section className="bg-[#1B1464] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-semibold leading-tight">
            Comprehensive Modules for <br /> Every Business Need
          </h2>
          <p className="text-indigo-200 mt-4 max-w-3xl mx-auto text-sm">
            BEAPONE UBOS offers a vast array of integrated modules, meticulously
            designed to cover every aspect of your business operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl px-6 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[210px]"
            >
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Tempor tortor varius
                  eget facilisis.
                </p>
              </div>

              <button
                className={`${item.color} text-white text-sm font-medium px-4 py-2 rounded-md w-fit mt-6`}
              >
                Learn more
              </button>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="text-center mt-12">
          <a className="text-indigo-200 text-sm hover:text-white cursor-pointer">
            View all modules
          </a>
        </div>
      </div>
    </section>
  );
}
