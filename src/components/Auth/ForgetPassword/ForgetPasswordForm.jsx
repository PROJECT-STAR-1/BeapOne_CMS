"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, KeyRound, Mail, ShieldCheck, Clock } from "lucide-react"

export default function ForgotPassword() {

  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [timer, setTimer] = useState(60)
  const [code, setCode] = useState(["","","","","",""])

  useEffect(() => {
    if(step === 2 && timer > 0){
      const interval = setInterval(()=>{
        setTimer(prev => prev - 1)
      },1000)

      return () => clearInterval(interval)
    }
  },[step,timer])


  const handleCodeChange = (value,index)=>{
    if(!/^[0-9]?$/.test(value)) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    const next = document.getElementById(`code-${index+1}`)
    if(value && next) next.focus()
  }

  const resendCode = ()=>{
    setTimer(60)
  }


  return (
    <div className="min-h-screen  flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-xl shadow-sm p-10">

        {/* Back */}
        <Link href="/auth/login" className="flex items-center gap-2 text-gray-500 mb-8">
          <ArrowLeft size={18}/>
          Back to Sign In
        </Link>

        {step === 1 && (

          <>
            {/* Icon */}
            <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <KeyRound className="text-blue-600"/>
            </div>

            <h1 className="text-2xl font-semibold mb-2">
              Reset your password
            </h1>

            <p className="text-gray-500 mb-6">
              Enter your registered email address and we'll send you a secure verification code.
            </p>

            {/* Secure Box */}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm mb-6">

              <div className="flex gap-2 text-blue-700 font-medium mb-1">
                <ShieldCheck size={16}/>
                Secure Recovery Process
              </div>

              <p className="text-blue-700 text-xs">
                Password reset requests are logged and monitored per NDPR and CBN compliance requirements. Multiple failed attempts may trigger account lockout.
              </p>

            </div>

            {/* Email Input */}

            <label className="text-sm font-medium">
              Email Address
            </label>

            <div className="flex items-center border rounded-lg px-3 mt-2 mb-6">
              <Mail size={18} className="text-gray-400"/>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-3 outline-none"
              />
            </div>


            <button
              onClick={()=>setStep(2)}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium"
            >
              Send Verification Code →
            </button>

            <div className="mt-6 text-sm text-gray-500 border rounded-lg p-4">
              Need help? If you no longer have access to your registered email, contact your organization's IT administrator or reach out to BEAPOne Support at
              <span className="text-blue-600 ml-1">support@beapone.com</span>
            </div>

          </>
        )}

        {step === 2 && (

          <>
            {/* Icon */}
            <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <Mail className="text-green-600"/>
            </div>

            <h1 className="text-2xl font-semibold mb-2">
              Check your email
            </h1>

            <p className="text-gray-500 mb-6">
              We sent a 6-digit verification code to
              <span className="font-medium ml-1">{email || "da*****@gmail.com"}</span>
            </p>

            {/* Status + Timer */}

            <div className="flex items-center justify-between mb-4 text-sm">

              <div className="flex items-center gap-2 text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Code is active
              </div>

              <div className="flex items-center gap-1 text-gray-500">
                <Clock size={16}/>
                {`0:${timer.toString().padStart(2,"0")}`}
              </div>

            </div>

            {/* Code Inputs */}

            <label className="text-sm font-medium">
              Verification Code
            </label>

            <div className="flex gap-3 mt-2 mb-6">

              {code.map((digit,index)=>(
                <input
                  key={index}
                  id={`code-${index}`}
                  maxLength={1}
                  value={digit}
                  onChange={(e)=>handleCodeChange(e.target.value,index)}
                  className="w-12 h-12 text-center text-lg border rounded-lg focus:outline-blue-500"
                />
              ))}

            </div>

            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium">
              Verify Code →
            </button>


            {/* Resend */}

            <div className="text-center text-sm text-gray-500 mt-4">

              Didn't receive the code?

              {timer === 0 ? (
                <button
                  onClick={resendCode}
                  className="ml-2 text-blue-600"
                >
                  Resend
                </button>
              ) : (
                <span className="ml-2 text-gray-400">
                  Resend in {timer}s
                </span>
              )}

              <button
                onClick={()=>setStep(1)}
                className="ml-4 text-blue-600"
              >
                Change email
              </button>

            </div>


            <div className="mt-6 text-xs text-gray-500 border rounded-lg p-4">
              Check your spam folder. Enterprise email filters may redirect verification emails. If you still don't receive it, ensure
              <span className="font-medium ml-1">noreply@beapone.com</span>
              is whitelisted.
            </div>

          </>
        )}

      </div>

    </div>
  )
}