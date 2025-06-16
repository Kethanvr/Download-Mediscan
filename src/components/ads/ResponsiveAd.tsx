"use client";

import GoogleAd from "../GoogleAd";

export default function ResponsiveAd() {
  return (
    <div className="w-full flex justify-center my-8 px-4">
      <div className="w-full max-w-4xl">
        <GoogleAd
          adSlot="1234567892" // You'll need to create ad units in AdSense and replace this
          adFormat="auto"
          fullWidthResponsive={true}
          className="w-full"
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
}
