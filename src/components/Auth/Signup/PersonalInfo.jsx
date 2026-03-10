import { useFormContext } from "react-hook-form"
import { User, Mail, Phone } from "lucide-react"

export default function PersonalInfo({ next }) {

  const { register, formState } = useFormContext()
  const { errors } = formState

  return (

    <div className="space-y-6">

      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-medium text-gray-700">
            First Name *
          </label>

          <div className="relative mt-1">

            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400"/>

            <input
              {...register("firstName")}
              placeholder="First name"
              className="w-full border rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}

        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Last Name *
          </label>

          <div className="relative mt-1">

            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400"/>

            <input
              {...register("lastName")}
              placeholder="Last name"
              className="w-full border rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

        </div>

      </div>

      {/* Email */}
      <div>

        <label className="text-sm font-medium text-gray-700">
          Work Email *
        </label>

        <div className="relative mt-1">

          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400"/>

          <input
            {...register("email")}
            placeholder="name@company.com"
            className="w-full border rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

      </div>

      {/* Phone */}
      <div>

        <label className="text-sm font-medium text-gray-700">
          Phone Number *
        </label>

        <div className="relative mt-1">

          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400"/>

          <input
            {...register("phone")}
            placeholder="+234 800 000 0000"
            className="w-full border rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

      </div>

      {/* Continue button */}
      <button
        type="button"
        onClick={next}
        className="w-full bg-[#1E3A8A] hover:bg-[#1e40af] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
      >
        Continue →
      </button>

    </div>
  )
}