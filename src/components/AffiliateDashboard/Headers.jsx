export default function Header() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">
        Welcome back, Jane!
      </h1>
      <p className="text-sm text-gray-500">
        🌐 Multi-currency tracking active. Preferred payout:{" "}
        <span className="font-medium text-black">
          USD (A3 Link)
        </span>
      </p>
    </div>
  );
}