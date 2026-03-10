import { useFormContext } from "react-hook-form"
import { Loader2, Lock, Eye, EyeOff, Shield } from "lucide-react"
import { useState } from "react"

export default function Security({ back }) {

  const { register, formState } = useFormContext()
  const { isSubmitting, errors } = formState

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="space-y-6">

      {/* Password */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Create a strong password"
            className={`w-full border rounded-md py-3 pl-10 pr-10 focus:outline-none focus:ring-2 ${
              errors.password
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-600"
            }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="text-xs text-red-500">
            {errors.password.message || "Password is required"}
          </p>
        )}
      </div>


      {/* Confirm Password */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Confirm Password <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            placeholder="Confirm your password"
            className={`w-full border rounded-md py-3 pl-10 pr-10 focus:outline-none focus:ring-2 ${
              errors.confirmPassword
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-600"
            }`}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="text-xs text-red-500">
            {errors.confirmPassword.message || "Please confirm your password"}
          </p>
        )}
      </div>


      {/* NDPR Info Box */}
      <div className="flex gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
        <Shield className="w-5 h-5 mt-0.5 text-blue-600" />
        <p>
          BEAPOne processes your data in compliance with the Nigeria Data
          Protection Regulation (NDPR) and international data protection
          standards. Your information is encrypted and stored securely within
          Nigerian data centers.
        </p>
      </div>


      {/* Terms */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 text-sm text-gray-700">
          <input type="checkbox" {...register("terms")} className="mt-1" />
          <span>
            I agree to BEAPOne's{" "}
            <span className="text-blue-700 underline">Terms of Service</span>,{" "}
            <span className="text-blue-700 underline">Privacy Policy</span> and{" "}
            <span className="text-blue-700 underline">Acceptable Use Policy</span>
            <span className="text-red-500"> *</span>
          </span>
        </label>

        {errors.terms && (
          <p className="text-xs text-red-500">
            You must agree to the Terms of Service
          </p>
        )}
      </div>


      {/* NDPR Consent */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 text-sm text-gray-700">
          <input type="checkbox" {...register("ndpr")} className="mt-1" />
          <span>
            I consent to BEAPOne processing my personal data as described in
            the NDPR Privacy Notice. I understand my data rights under the
            Nigeria Data Protection Regulation.
            <span className="text-red-500"> *</span>
          </span>
        </label>

        {errors.ndpr && (
          <p className="text-xs text-red-500">
            NDPR consent is required for data processing
          </p>
        )}
      </div>


      {/* Buttons */}
      <div className="flex gap-4 pt-2">

        <button
          type="button"
          onClick={back}
          className="flex-1 border border-gray-300 py-3 rounded-md font-medium text-gray-700 hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Back
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-900 text-white py-3 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-blue-800 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Request Access →"
          )}
        </button>

      </div>

    </div>
  )
}