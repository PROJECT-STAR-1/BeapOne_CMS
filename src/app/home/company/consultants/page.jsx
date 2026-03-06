import {
  Workflow,
  FileText,
  Cog,
  User,
  Monitor,
  Hexagon,
  Globe,
  ShieldCheck,
  Infinity,
  CheckCircle, ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-[#1B1464] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold leading-tight">
            Unlock Peak Performance with BEAPOne UBOS Expertise
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            As certified UBOS Experts, we transform your complex workflows into a
            comprehensive, customized Universal Business Operating System (UBOS).
          </p>

          <button className="mt-8 bg-white text-black font-bold px-6 py-3 rounded-full shadow">
            Start Maximizing Productivity Today
          </button>
        </div>
      </section>


      {/* SECTION 1 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            The BEAPOne Advantage: UBOS Mastery
          </h2>

          <p className="text-gray-500 mt-2">
            We don’t just configure software; we build your comprehensive,
            efficient operating system.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <Card
              icon={<Workflow size={28} />}
              title="Streamline Workflows"
              color="border-indigo-500 text-indigo-600"
              description="We eliminate bottlenecks, design lean processes, and structure your UBOS workspace for maximum operational speed and clarity."
            />

            <Card
              icon={<FileText size={28} />}
              title="Document Processes"
              color="border-green-500 text-green-600"
              description="Convert tacit knowledge into explicit, easily accessible documentation directly within your UBOS."
            />

            <Card
              icon={<Cog size={28} />}
              title="Automate Tasks"
              color="border-red-500 text-red-600"
              description="Leverage the UBOS automation engine to handle repetitive tasks and free your team to focus on high-value work."
            />

          </div>
        </div>
      </section>


      {/* SECTION 2 */}
      <section className="py-16 px-6 bg-[#F7F7FA]">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            The BEAPOne Advantage: UBOS Mastery
          </h2>

          <p className="text-gray-500 mt-2">
            We don’t just configure software; we build your comprehensive,
            efficient operating system.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <Card icon={<User size={26} />} title="Personalized 1:1 Service"
              color="border-indigo-500 text-indigo-600"
              description="Dedicated support tailored precisely to your team’s size and complexity."
            />

            <Card icon={<Monitor size={26} />} title="Broad Industry Expertise"
              color="border-green-500 text-green-600"
              description="Consultants with proven success across a wide range of industries."
            />

            <Card icon={<Hexagon size={26} />} title="Custom Solutions"
              color="border-red-500 text-red-600"
              description="Workflows and systems built from the ground up for your exact objectives."
            />

            <Card icon={<Globe size={26} />} title="Global Communication"
              color="border-yellow-500 text-yellow-500"
              description="Access to a network of consultants supporting over 20 languages globally."
            />

            <Card icon={<ShieldCheck size={26} />} title="Trusted & Vetted"
              color="border-indigo-500 text-indigo-600"
              description="Work with professionals rigorously vetted by the BEAPOne UBOS program."
            />

            <Card icon={<Infinity size={26} />} title="Flexible Timelines"
              color="border-green-500 text-green-600"
              description="Consulting arrangements designed to fit your schedule and deadlines."
            />

          </div>
        </div>
      </section>


      {/* JOIN ECOSYSTEM */}
      <section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold">
        Join the Ecosystem: Become an Official UBOS Consultant
      </h2>

      <p className="text-gray-500 mt-2 text-sm">
        Are you a productivity expert? Accelerate your business by joining the
        BEAPOne UBOS Partner Program.
      </p>
    </div>


    <div className="grid md:grid-cols-2 gap-10">

      {/* LEFT CARD */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-card p-8 border-l-4 border-indigo-500">

        <h3 className="text-lg font-semibold text-indigo-700 mb-6">
          Program Benefits
        </h3>

        <ul className="space-y-5 text-sm text-gray-600">

          <li className="flex gap-3">
            <CheckCircle className="text-indigo-600 w-5 h-5 mt-[2px]" />
            <span>
              <b className="text-indigo-600">Credibility:</b> Increase your business's trustworthiness with the official badge.
            </span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="text-indigo-600 w-5 h-5 mt-[2px]" />
            <span>
              <b className="text-indigo-600">Promotion:</b> Get your services promoted to the vast BEAPOne UBOS customer base.
            </span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="text-indigo-600 w-5 h-5 mt-[2px]" />
            <span>
              <b className="text-indigo-600">Resources:</b> Access partner portals, marketing collateral, and development tools.
            </span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="text-indigo-600 w-5 h-5 mt-[2px]" />
            <span>
              <b className="text-indigo-600">Early Access:</b> Participate in beta testing and receive early product updates.
            </span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="text-indigo-600 w-5 h-5 mt-[2px]" />
            <span>
              <b className="text-indigo-600">Tools:</b> Get a free sandbox account for experimentation and development.
            </span>
          </li>

        </ul>

      </div>


      {/* RIGHT CARD */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-card p-8 border-l-4 border-green-500">

        <h3 className="text-lg font-semibold text-green-700 mb-6">
          Eligibility & Requirements
        </h3>

        <div className="space-y-4">

          {/* Item */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <p className="font-semibold text-green-600 text-sm">
              1. Passion for Productivity
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Increase your business's trustworthiness with the official badge.
            </p>
          </div>

          {/* Item */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <p className="font-semibold text-green-600 text-sm">
              2. Expertise & Experience
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Proven experience implementing UBOS services and optimizing workflows for multiple clients.
            </p>
          </div>

          {/* Item */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <p className="font-semibold text-green-600 text-sm">
              3. Business Size (Ideal Candidate)
            </p>
            <p className="text-gray-500 text-sm mt-1">
              The ideal consultant has less than 10 full-time employees and generates less than $1M in annual revenue.
            </p>
          </div>

        </div>

        <button className="mt-6 bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium">
          Apply to Become Official
          <ArrowRight size={16} />
        </button>

      </div>

    </div>

  </div>
</section>

    </main>
  );
}



function Card({ icon, title, description, color }) {
  return (
    <div className={`bg-white border ${color} border-t-4 rounded-xl p-6 shadow-card text-left`}>
      <div className={`mb-4 ${color}`}>
        {icon}
      </div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>
    </div>
  );
}