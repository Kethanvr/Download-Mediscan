"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AutoAds() {
  useEffect(() => {
    // Initialize auto ads
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-6985167612880362",
        enable_page_level_ads: true,
      });
    } catch (err) {
      console.error("Auto ads initialization error:", err);
    }
  }, []);

  return (
    <Script
      id="auto-ads-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-6985167612880362",
            enable_page_level_ads: true
          });
        `,
      }}
    />
  );
}
