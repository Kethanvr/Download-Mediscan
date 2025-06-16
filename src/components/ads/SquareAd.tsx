"use client";

import GoogleAd from "../GoogleAd";

export default function SquareAd() {
  return (
    <div className="w-full flex justify-center my-6">
      <GoogleAd
        adSlot="1234567891" // You'll need to create ad units in AdSense and replace this
        adFormat="rectangle"
        className="w-full max-w-sm"
        style={{ display: "block", width: "300px", height: "250px" }}
      />
    </div>
  );
}
