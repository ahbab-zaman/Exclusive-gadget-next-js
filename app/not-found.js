import Link from "next/link";

export default function errorPage() {
  return (
    <div>
      <div
        style={{ textAlign: "center", padding: "50px" }}
        className="space-y-4"
      >
        <h1 className="text-7xl font-bold">404 - Not Found</h1>
        <p className="text-3xl font-semibold">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div>
          <Link href="/">
            <button className="px-4 py-2 rounded-full bg-[#DB4444] text-white">
              Go Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
