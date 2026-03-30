"use client";
import { useSearchParams } from "next/navigation"
import { Mail, Lock, Eye, Shield } from "lucide-react";

export default function LoginForm() {

   const params = useSearchParams()
  const created = params.get("created")


  return (
    <div className="space-y-6">

        {created && (

        <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded mb-4">
          ✅ Account created successfully. Please sign in.
        </div>

      )}

      {/* Heading */}
      <div>
        <h2 className="text-3xl font-semibold">Welcome back</h2>
        <p className="text-gray-500">
          Sign in to your BEAPOne UBOS dashboard
        </p>
      </div>

      {/* Secure Login Banner */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">

        <Shield size={18} />

        <p>
          <strong>Secure Enterprise Login</strong>
          <br />
          All login attempts are monitored and logged per NDPR compliance.
        </p>

      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Email Address</label>

        <div className="flex items-center border rounded-lg px-3">
          <Mail className="w-4 h-4 text-gray-400" />

          <input
            type="email"
            placeholder="name@company.com"
            className="w-full p-3 outline-none"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">

        <div className="flex justify-between">
          <label className="text-sm font-medium">Password</label>

          <a
            href="/auth/forgetPassword"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <div className="flex items-center border rounded-lg px-3">
          <Lock className="w-4 h-4 text-gray-400" />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 outline-none"
          />

          <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Remember */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <input type="checkbox" />
        <span>Remember me for 30 days</span>
      </div>

      {/* Login Button */}
      <button
        className="w-full py-3 bg-blue-800 text-white rounded-lg font-medium
        hover:bg-blue-900 transition"
      >
        Sign In to Dashboard →
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 text-sm text-gray-400">
        <div className="flex-1 h-px bg-gray-200" />
        Or continue with
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* SSO Buttons */}
      <div className="grid grid-cols-2 gap-3">

        <button className="border rounded-lg py-2 hover:bg-gray-50">
          Google SSO
        </button>

        <button className="border rounded-lg py-2 hover:bg-gray-50">
          Microsoft SSO
        </button>

      </div>

      {/* Signup */}
      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <a href="/auth/signup" className="text-blue-600 hover:underline">
          Create Account
        </a>
      </p>

    </div>
  );
}