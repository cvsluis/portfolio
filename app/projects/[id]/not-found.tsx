import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested project.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-black px-4 py-2 text-sm text-white"
      >
        Go Back
      </Link>
    </main>
  );
}
