'use client';
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <h1 className="text-8xl md:text-9xl font-extrabold text-[var(--primary-color)] animate-bounce">
        404
      </h1>

      <div className="h-1 w-20 rounded bg-[var(--primary-color)] my-5 md:my-7"></div>

      <p className="text-2xl md:text-3xl font-semibold text-gray-800">
        Page Not Found
      </p>

      <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="/"
          className="bg-[var(--primary-color)] px-7 py-3 text-white rounded-md font-medium active:scale-95 transition-all"
        >
          Return Home
        </a>
        <a
          href="/contact"
          className="border border-gray-300 px-7 py-3 text-gray-800 rounded-md font-medium hover:bg-gray-100 active:scale-95 transition-all"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
