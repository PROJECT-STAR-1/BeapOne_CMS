import { Check } from "lucide-react"

export default function Stepper({ step, steps }) {

  return (

    <div className="flex items-center w-full mt-6 mb-8">

      {steps.map((item, index) => {

        const active = step === index
        const completed = step > index

        return (

          <div key={item.id} className="flex items-center flex-1">

            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold

              ${completed
                ? "bg-green-500 text-white"
                : active
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-500"
              }

              `}
            >

              {completed ? <Check size={16} /> : index + 1}

            </div>

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
              {item.label}
            </span>

            {index !== steps.length - 1 && (

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