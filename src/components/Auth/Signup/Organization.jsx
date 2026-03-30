import { useFormContext } from "react-hook-form"

export default function Organization({ next, back }) {

  const { register } = useFormContext()

  return (

    <div className="space-y-6">

      {/* Organization Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Organization Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("organizationName")}
          placeholder="e.g. Dangote Industries Limited"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Organization Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Organization Type <span className="text-red-500">*</span>
        </label>
        <select
          {...register("organizationType")}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select organization type</option>
          <option>Private</option>
          <option>Government</option>
          <option>NGO</option>
          <option>Startup</option>
        </select>
      </div>


{/* What are you signing up for */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    What are you signing up for? <span className="text-red-500">*</span>
  </label>
  <select
    {...register("signupFor")}
    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select an option</option>
    <option value="Affiliate">Affiliate</option>
    <option value="Resellers">Resellers</option>
    <option value="Partners">Partners</option>
    <option value="Community Hub">Community Hub</option>
  </select>
</div>
      {/* Job + Department */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            {...register("jobTitle")}
            placeholder="e.g. CFO"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department <span className="text-red-500">*</span>
          </label>
          <input
            {...register("department")}
            placeholder="e.g. Finance"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>

      {/* Number of Employees */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Employees
        </label>
        <select
          {...register("employees")}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select range</option>
          <option>1 - 10</option>
          <option>11 - 50</option>
          <option>51 - 200</option>
          <option>201 - 500</option>
          <option>500+</option>
        </select>
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Country
        </label>
        <input
          {...register("country")}
          readOnly
          className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-100 text-gray-600"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">

        <button
          type="button"
          onClick={back}
          className="flex-1 border border-gray-300 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>

        <button
          type="button"
          onClick={next}
          className="flex-1 bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800"
        >
          Continue →
        </button>

      </div>

    </div>
  )
}