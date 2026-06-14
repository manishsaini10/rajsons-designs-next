import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-[#1e3a5f]">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mb-8 text-gray-500">The page you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        className="rounded-lg bg-[#f7941e] px-8 py-3 font-semibold text-white transition-all hover:bg-[#e5840e]"
      >
        Return Home
      </Link>
    </div>
  );
}
