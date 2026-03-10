import { forwardRef } from "react"

export default forwardRef(function InputField(
  { icon: Icon, error, type = "text", ...props },
  ref
) {

  return (
    <div className="mt-1">

      <div className="relative">

        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        )}

        <input
          ref={ref}
          type={type}
          {...props}
          className={`w-full border rounded-lg py-3 pl-10 pr-3 outline-none bg-white
          ${error
              ? "border-red-400"
              : "border-gray-200 focus:ring-2 focus:ring-[#243C84]"
            }`}
        />

      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}

    </div>
  )
})