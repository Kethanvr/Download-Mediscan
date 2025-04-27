import type { SVGProps } from "react";

export default function PlaceholderAppScreen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="500"
      viewBox="0 0 250 500"
      fill="none"
      aria-label="MediScan App Screen"
      {...props}
    >
      <title>MediScan App Screen Placeholder</title>
      <rect width="250" height="500" rx="20" fill="#F3F4F6" />
      <rect y="0" width="250" height="60" rx="8" fill="#3B82F6" />
      <circle cx="30" cy="30" r="8" fill="white" />
      <rect x="50" y="26" width="100" height="8" rx="4" fill="white" />
      
      {/* Camera viewfinder */}
      <rect x="35" y="80" width="180" height="180" rx="8" fill="white" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="125" cy="170" r="50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M105 170H145M125 150V190" stroke="#3B82F6" strokeWidth="2" />
      
      {/* Button */}
      <rect x="75" y="280" width="100" height="40" rx="20" fill="#3B82F6" />
      <text x="125" y="305" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="14" fontWeight="bold">SCAN</text>
      
      {/* Recent scans */}
      <rect x="35" y="340" width="180" height="30" rx="6" fill="white" />
      <text x="60" y="360" fill="#3B82F6" fontFamily="Arial" fontSize="12" fontWeight="bold">Recent Scans</text>
      
      <rect x="35" y="380" width="180" height="40" rx="6" fill="white" />
      <circle cx="55" cy="400" r="10" fill="#DBEAFE" />
      <rect x="75" y="393" width="120" height="6" rx="3" fill="#93C5FD" />
      <rect x="75" y="403" width="80" height="4" rx="2" fill="#93C5FD" />
      
      <rect x="35" y="430" width="180" height="40" rx="6" fill="white" />
      <circle cx="55" cy="450" r="10" fill="#DBEAFE" />
      <rect x="75" y="443" width="120" height="6" rx="3" fill="#93C5FD" />
      <rect x="75" y="453" width="80" height="4" rx="2" fill="#93C5FD" />
    </svg>
  );
}
