"use client";

import GoogleAd from "../GoogleAd";

export default function BannerAd() {
  return (
    <div className="w-full flex justify-center my-4">
      <GoogleAd
        adSlot="1234567890" // You'll need to create ad units in AdSense and replace this
        adFormat="horizontal"
        className="w-full max-w-4xl"
        style={{ display: "block", width: "100%", height: "90px" }}
      />
    </div>
  );
}
