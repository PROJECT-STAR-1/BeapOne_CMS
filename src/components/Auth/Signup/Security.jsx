import { useState } from "react"
import { Lock, Eye, EyeOff, Shield } from "lucide-react"

export default function Security({ form, back }) {

  const { register, watch, formState } = form
  const { errors } = formState

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const password = watch("password")

  return (
    <div className="space-y-6">

      {/* Password */}
      <div className="space-y-2">

        <label className="text-sm font-medium">
          Password <span className="text-red-500">*</span>
        </label>

        <div className="relative">

          <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
            className={`w-full border rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-2
              ${errors.password ? "border-red-400 focus:ring-red-400" : "focus:ring-blue-600"}
            `}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

        {errors.password && (
          <p className="text-red-500 text-sm">
            ⚠ {errors.password.message}
          </p>
        )}

      </div>

      {/* Confirm Password */}
      <div className="space-y-2">

        <label className="text-sm font-medium">
          Confirm Password <span className="text-red-500">*</span>
        </label>

        <div className="relative">

          <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match"
            })}
            className={`w-full border rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-2
              ${errors.confirmPassword ? "border-red-400 focus:ring-red-400" : "focus:ring-blue-600"}
            `}
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-3.5 text-gray-400"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            ⚠ {errors.confirmPassword.message}
          </p>
        )}

      </div>

      {/* NDPR Info Box */}
      <div className="flex gap-3 border border-blue-200 bg-blue-50 p-4 rounded-lg text-sm text-blue-900">

        <Shield className="w-5 h-5 mt-1 text-blue-600" />

        <p>
          BEAPOne processes your data in compliance with the Nigeria Data
          Protection Regulation (NDPR) and international data protection
          standards. Your information is encrypted and stored securely within
          Nigerian data centers.
        </p>

      </div>

      {/* Terms */}
      <div className="space-y-2">

        <label className="flex gap-3 text-sm items-start">

          <input
            type="checkbox"
            {...register("terms", {
              required: "You must agree to the Terms of Service"
            })}
            className="mt-1"
          />

          <span>
            I agree to BEAPOne's{" "}
            <span className="text-blue-700 font-medium cursor-pointer">
              Terms of Service
            </span>,{" "}
            <span className="text-blue-700 font-medium cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-blue-700 font-medium cursor-pointer">
              Acceptable Use Policy
            </span>
            <span className="text-red-500"> *</span>
          </span>

        </label>

        {errors.terms && (
          <p className="text-red-500 text-sm">
            ⚠ {errors.terms.message}
          </p>
        )}

      </div>

      {/* NDPR Consent */}
      <div className="space-y-2">

        <label className="flex gap-3 text-sm items-start">

          <input
            type="checkbox"
            {...register("ndpr", {
              required: "NDPR consent is required for data processing"
            })}
            className="mt-1"
          />

          <span>
            I consent to BEAPOne processing my personal data as described in
            the NDPR Privacy Notice. I understand my data rights under the
            Nigeria Data Protection Regulation.
            <span className="text-red-500"> *</span>
          </span>

        </label>

        {errors.ndpr && (
          <p className="text-red-500 text-sm">
            ⚠ {errors.ndpr.message}
          </p>
        )}

      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-2">

        <button
          type="button"
          onClick={back}
          className="flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50"
        >
          Back
        </button>

        <button
          type="submit"
          className="flex-1 bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800"
        >
          Request Access →
        </button>

      </div>

    </div>
  )
}