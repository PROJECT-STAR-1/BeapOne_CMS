import InputField from "./InputField"
import { User, Mail, Phone } from "lucide-react"

export default function PersonalInfo({ form, next }) {

  const { register, formState } = form

  return (
    <div className="space-y-5">

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-medium">
            First Name <span className="text-red-500">*</span>
          </label>

          <InputField
            icon={User}
            placeholder="First name"
            {...register("firstName")}
            error={formState.errors.firstName?.message}
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>

          <InputField
            icon={User}
            placeholder="Last name"
            {...register("lastName")}
            error={formState.errors.lastName?.message}
          />
        </div>

      </div>

      <div>
        <label className="text-sm font-medium">
          Work Email <span className="text-red-500">*</span>
        </label>

        <InputField
          icon={Mail}
          placeholder="name@company.com"
          {...register("email")}
          error={formState.errors.email?.message}
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Phone Number <span className="text-red-500">*</span>
        </label>

        <InputField
          icon={Phone}
          placeholder="+234 800 000 0000"
          {...register("phone")}
          error={formState.errors.phone?.message}
        />
      </div>

      <button
        type="button"
        onClick={next}
        className="w-full bg-[#243C84] hover:bg-[#1d326e] text-white py-3 rounded-lg font-medium mt-2"
      >
        Continue →
      </button>

    </div>
  )
}