"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

import { signupSchema } from "@/lib/validation/signupSchema"
import { signupSteps } from "./signupSteps"

import Stepper from "./Stepper"

export default function SignupForm() {

  const router = useRouter()
  const [step, setStep] = useState(0)

  const methods = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      country: "Nigeria"
    }
  })

  const currentStep = signupSteps[step]
  const StepComponent = currentStep.component

  const next = async () => {
    const valid = await methods.trigger(currentStep.fields)
    if (!valid) return
    setStep((s) => s + 1)
  }

  const back = () => setStep((s) => s - 1)

  const submit = async (data) => {
    console.log("FORM DATA:", data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/auth/login?created=true")
  }

  return (

    <div className="min-h-screen flex items-center justify-center px-4">

      <FormProvider {...methods}>

        <form
          onSubmit={methods.handleSubmit(submit)}
          className="bg-white max-w-xl p-10 rounded-2xl shadow-sm "
        >

          {/* Header */}
          <div className="mb-6">

            <h1 className="text-2xl font-semibold text-gray-900">
              Create your account
            </h1>

            <p className="text-gray-500 mt-1 text-sm">
              Request access to the BEAPOne UBOS platform
            </p>

          </div>

          <Stepper step={step} steps={signupSteps} />

          <div className="mt-8">

            <StepComponent
              next={next}
              back={back}
              isLast={step === signupSteps.length - 1}
            />

          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">

            Already have an account?{" "}
            <span
              className="text-blue-700 font-medium cursor-pointer"
              onClick={() => router.push("/auth/login")}
            >
              Sign In
            </span>

          </div>

          {/* Compliance badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">

            <span className="border px-2 py-1 rounded-full">NDPR</span>
            <span className="border px-2 py-1 rounded-full">CBN</span>
            <span className="border px-2 py-1 rounded-full">NITDA</span>
            <span className="border px-2 py-1 rounded-full">CAC</span>
            <span className="border px-2 py-1 rounded-full">ISO 27001</span>

          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            Your data is processed in accordance with the Nigeria Data Protection
            Regulation (NDPR) and stored securely in compliance with CBN and
            NITDA requirements.
          </p>

        </form>

      </FormProvider>

    </div>
  )
}