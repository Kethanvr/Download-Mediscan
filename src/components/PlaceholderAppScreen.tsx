import type { SVGProps } from "react";

export default function PlaceholderAppScreen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="500"
      viewBox="0 0 250 500"
      fill="none"
      {...props}
    >
      <title>Placeholder App Screen</title>
      <rect width="250" height="500" rx="20" fill="#EBF5FF" />
      <rect y="0" width="250" height="60" rx="8" fill="#3B82F6" />
      <circle cx="30" cy="30" r="8" fill="white" />
      <rect x="50" y="26" width="100" height="8" rx="4" fill="white" />
      
      <rect x="25" y="80" width="200" height="100" rx="8" fill="white" />
      <rect x="45" y="100" width="160" height="8" rx="4" fill="#93C5FD" />
      <rect x="45" y="120" width="120" height="8" rx="4" fill="#93C5FD" />
      <rect x="45" y="140" width="140" height="8" rx="4" fill="#93C5FD" />
      
      <rect x="25" y="200" width="200" height="100" rx="8" fill="white" />
      <circle cx="75" cy="250" r="30" fill="#93C5FD" />
      <rect x="125" y="230" width="80" height="8" rx="4" fill="#93C5FD" />
      <rect x="125" y="250" width="60" height="8" rx="4" fill="#93C5FD" />
      <rect x="125" y="270" width="70" height="8" rx="4" fill="#93C5FD" />
      
      <rect x="25" y="320" width="95" height="80" rx="8" fill="white" />
      <rect x="45" y="340" width="55" height="8" rx="4" fill="#93C5FD" />
      <rect x="45" y="360" width="40" height="8" rx="4" fill="#93C5FD" />
      
      <rect x="130" y="320" width="95" height="80" rx="8" fill="white" />
      <rect x="150" y="340" width="55" height="8" rx="4" fill="#93C5FD" />
      <rect x="150" y="360" width="40" height="8" rx="4" fill="#93C5FD" />
      
      <rect x="85" y="430" width="80" height="40" rx="20" fill="#3B82F6" />
      <rect x="105" y="446" width="40" height="8" rx="4" fill="white" />
    </svg>
  );
}
