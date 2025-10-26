"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// react-qr-code uses window; load dynamically on client
const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });

const QR_PAGE_URL = "https://sif1t.vercel.app/";

export default function QRPage() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleDownload = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "sifat-qr.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="relative min-h-[80vh] px-4 py-16 flex items-center justify-center">
      <motion.div
        className="glass-strong rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl max-w-xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Scan to open my website</h1>
        <div className="bg-white p-4 rounded-2xl inline-block mx-auto mb-6">
          <QRCode value={QR_PAGE_URL} size={220} fgColor="#000000" bgColor="#ffffff" level="H" ref={svgRef as any} />
        </div>
        <p className="text-gray-300 mb-6">Point your phone camera at the QR code to open {QR_PAGE_URL}</p>
        <div className="flex items-center justify-center gap-3">
          <a href={QR_PAGE_URL} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold transition-smooth">Open site</a>
          <button onClick={handleDownload} className="px-5 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-smooth">Download QR (SVG)</button>
        </div>
      </motion.div>
    </main>
  );
}
