import { Briefcase, Building2, Globe } from "lucide-react"

export default function Organization({ form, next, back }) {

  const { register, formState } = form

  return (
    <div className="space-y-6">

      {/* Organization Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Organization Name <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

          <input
            {...register("organizationName")}
            placeholder="e.g. Dangote Industries Limited"
            className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Organization Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Organization Type <span className="text-red-500">*</span>
        </label>

        <select
          {...register("organizationType")}
          className="w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select organization type</option>
          <option>Private</option>
          <option>Government</option>
          <option>NGO</option>
          <option>Startup</option>
        </select>
      </div>

      {/* Job Title + Department */}
      <div className="grid grid-cols-2 gap-4">

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Job Title <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <Briefcase className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

            <input
              {...register("jobTitle")}
              placeholder="e.g. CFO"
              className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Department <span className="text-red-500">*</span>
          </label>

          <input
            {...register("department")}
            placeholder="e.g. Finance"
            className="w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

      </div>

      {/* Number of Employees */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Number of Employees
        </label>

        <select
          {...register("employees")}
          className="w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select range</option>
          <option>1 - 10</option>
          <option>11 - 50</option>
          <option>51 - 200</option>
          <option>201 - 500</option>
          <option>500+</option>
        </select>

        {formState.errors.employees && (
          <p className="text-red-500 text-sm">
            {formState.errors.employees.message}
          </p>
        )}
      </div>

      {/* Country */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Country</label>

        <div className="relative">
          <Globe className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

          <input
  {...register("country")}
  defaultValue="Nigeria"
  readOnly
/>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">

        <button
          type="button"
          onClick={back}
          className="flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50"
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