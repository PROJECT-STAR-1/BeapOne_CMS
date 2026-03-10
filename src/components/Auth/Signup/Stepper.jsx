import { Check } from "lucide-react"

export default function Stepper({ step }) {

  const steps = [
    "Personal Info",
    "Organization",
    "Security"
  ]

  return (

    <div className="flex items-center w-full mt-6 mb-8">

      {steps.map((label, index) => {

        const num = index + 1
        const active = step === num
        const completed = step > num

        return (

          <div key={label} className="flex items-center flex-1">

            {/* Circle */}

            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold
              
              ${completed
                ? "bg-green-500 text-white"
                : active
                ? "bg-[#243C84] text-white"
                : "bg-gray-200 text-gray-500"
              }
              
              `}
            >

              {completed ? <Check size={16} /> : num}

            </div>

            {/* Label */}

            <span
              className={`ml-3 text-sm
              
              ${
                completed
                  ? "text-green-600 font-medium"
                  : active
                  ? "text-gray-900 font-medium"
                  : "text-gray-400"
              }
              
              `}
            >
              {label}
            </span>

            {/* Line */}

            {num !== steps.length && (

              <div
                className={`flex-1 h-[2px] mx-4
                ${completed ? "bg-green-500" : "bg-gray-200"}
                `}
              />

            )}

          </div>
        )
      })}

    </div>
  )
}