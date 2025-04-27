import AppLogo from "@/components/AppLogo";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-pulse">
          <AppLogo className="w-24 h-24" />
        </div>
        
        <h2 className="mt-6 text-xl font-medium text-gray-600">Loading MediScan...</h2>
        
        <div className="mt-4 w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite]" 
            style={{ width: '70%' }}
          />
        </div>
      </div>
    </div>
  );
}

// Add this to globals.css
// @keyframes loading {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(200%); }
// }
