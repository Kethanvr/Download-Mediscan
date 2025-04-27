import Link from "next/link";
import AppLogo from "@/components/AppLogo";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <AppLogo className="w-40 h-40" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        
        <Link 
          href="/" 
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
