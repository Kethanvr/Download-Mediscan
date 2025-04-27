"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import AppLogo from "@/components/AppLogo";

export default function AppError({
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <AppLogo width={80} height={80} />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
        
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. The page encountered an error.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Try again
          </button>
          
          <Link 
            href="/"
            className="w-full sm:w-auto bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
