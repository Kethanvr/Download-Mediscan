"use client";

import GoogleAd from "../GoogleAd";

export default function InArticleAd() {
  return (
    <div className="w-full flex justify-center my-8 py-4">
      <div className="w-full max-w-2xl border-t border-b border-gray-200 py-4">
        <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
        <GoogleAd
          adSlot="1234567893" // You'll need to create ad units in AdSense and replace this
          adFormat="auto"
          fullWidthResponsive={true}
          className="w-full"
          style={{ display: "block", minHeight: "100px" }}
        />
      </div>
    </div>
  );
}
