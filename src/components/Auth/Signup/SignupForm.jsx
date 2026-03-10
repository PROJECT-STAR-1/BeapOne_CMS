"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "@/lib/validation/signupSchema"

import Stepper from "./Stepper"
import PersonalInfo from "./PersonalInfo"
import Organization from "./Organization"
import Security from "./Security"

export default function SignupForm() {

  const [step, setStep] = useState(1)

 const form = useForm({
  resolver: zodResolver(signupSchema),
  mode: "onChange",
  shouldUnregister: true
})

const next = async (fields) => {
  const valid = await form.trigger(fields)

  if (!valid) return

  setStep((prev) => prev + 1)
}

const back = () => setStep((prev) => prev - 1)

  const submit = (data) => {
    console.log(data)
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={form.handleSubmit(submit)}
        className="bg-white p-10 rounded-xl shadow-sm w-[520px]"
      >

        <h1 className="text-3xl font-semibold text-gray-900">
          Create your account
        </h1>

        <p className="text-gray-500 mt-2">
          Request access to the BEAPOne UBOS platform
        </p>

        <div className="mt-6">
          <Stepper step={step} />
        </div>

        <div className="mt-8">

          {step === 1 && (
            <PersonalInfo
              form={form}
              next={() =>
                next([
                  "firstName",
                  "lastName",
                  "email",
                  "phone"
                ])
              }
            />
          )}

          {step === 2 && (
            <Organization
              form={form}
              back={back}
              next={() =>
                next([
                  "organizationName",
                  "organizationType",
                  "jobTitle",
                  "department",
                  "employees",
                  "country"
                ])
              }
            />
          )}

          {step === 3 && (
            <Security
              form={form}
              back={back}
            />
          )}

        </div>

        {/* Sign in link */}

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-blue-900 font-medium cursor-pointer">
            Sign In
          </span>
        </p>

        {/* Compliance badges */}

        <div className="flex justify-center gap-2 mt-6 flex-wrap">

          {["NDPR", "CBN", "NITDA", "CAC", "ISO 27001"].map((item) => (
            <span
              key={item}
              className="text-xs border px-3 py-1 rounded-full text-gray-500"
            >
              {item}
            </span>
          ))}

        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Your data is processed in accordance with the Nigeria Data Protection Regulation (NDPR)
          and stored securely in compliance with CBN and NITDA requirements.
        </p>

      </form>
    </div>
  )
}