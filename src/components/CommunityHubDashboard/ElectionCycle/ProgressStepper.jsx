"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProgressStepper({ steps }) {
  const pathname = usePathname();

  const currentStepIndex = steps.findIndex((step) =>
    step.paths?.some((path) => pathname.startsWith(path)),
  );

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;

          const Icon = step.icon;

          const StepContent = (
            <div className="flex flex-col items-center flex-1 cursor-pointer">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${isActive ? "bg-indigo-700 text-white" : ""}
                  ${isCompleted ? "bg-green-600 text-white" : ""}
                  ${!isActive && !isCompleted ? "bg-gray-200 text-gray-500" : ""}
                `}
              >
                <Icon className="w-5 h-5" />
              </div>

              <span
                className={`text-[11px] mt-2 tracking-widest font-semibold text-center
                  ${isActive ? "text-indigo-700" : ""}
                  ${isCompleted ? "text-green-600" : ""}
                  ${!isActive && !isCompleted ? "text-gray-400" : ""}
                `}
              >
                {step.name}
              </span>
            </div>
          );

          return (
            <div key={step.name} className="flex items-center flex-1">
              {step.href ? (
                <Link href={step.href} className="flex-1">
                  {StepContent}
                </Link>
              ) : (
                StepContent
              )}

              {index < steps.length - 1 && (
                <div
                  className={`h-[2px] flex-1 mx-2
                    ${index < currentStepIndex ? "bg-green-600" : "bg-gray-300"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
