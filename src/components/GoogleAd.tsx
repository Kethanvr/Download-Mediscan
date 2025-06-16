"use client";

import { useEffect } from "react";

interface GoogleAdProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function GoogleAd({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style = { display: "block" },
}: GoogleAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-6985167612880362"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  );
}
