"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[90dvh] flex-col items-center justify-center">
      <div className="mx-auto max-w-md space-y-4 text-center">
        <div className="inline-flex items-center rounded-full bg-red-100 p-2 dark:bg-red-900">
          <TriangleAlertIcon className="h-6 w-6 text-red-500 dark:text-red-400" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Oops, something went wrong!
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          We couldn&apos;t find the page you were looking for. Please check the
          URL or try again later.
        </p>
        <button
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function TriangleAlertIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
