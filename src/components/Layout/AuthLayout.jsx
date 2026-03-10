export default function AuthLayout({ children, leftPanel }) {
  return (
    <div className="min-h-screen flex">

      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2">
        {leftPanel}
      </div>

      {/* Right Panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-8 py-12">

        <div className="w-full max-w-md">
          {children}
        </div>

      </div>

    </div>
  );
}