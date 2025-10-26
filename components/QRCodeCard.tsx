"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Load QR component only on client
const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });

interface QRCodeCardProps {
  href?: string; // page that shows the full-size QR
  url?: string; // encoded URL for the mini QR
  showMiniQR?: boolean; // render an actual scannable mini QR in the tile
}

const QRCodeCard: React.FC<QRCodeCardProps> = ({
  href = "/qr",
  url = "https://sif1t.vercel.app/",
  showMiniQR = true,
}) => {
  return (
    <Link href={href} className="group" aria-label="Open QR page" title="Open QR page">
      <div className="glass-strong rounded-3xl p-5 w-36 md:w-40 aspect-square flex flex-col items-center justify-center text-center border border-white/10 hover:border-purple-500/50 transition-smooth hover:shadow-xl hover:shadow-purple-500/20">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
          {showMiniQR ? (
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              {/* Keep size around 72 for reliable scanning on most screens */}
              <QRCode value={url} size={72} fgColor="#000000" bgColor="#ffffff" level="H" />
            </div>
          ) : (
            <span className="text-white font-extrabold text-xl tracking-wide">QR</span>
          )}
        </div>
        <span className="text-gray-300 group-hover:text-white text-sm">Scan Me</span>
      </div>
    </Link>
  );
};

export default QRCodeCard;
