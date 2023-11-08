import Header from "@/components/head";
import React from "react";

export default function Custom404() {
  return (
    <>
      <Header title="Page not found - CodeExtreme" />
      <main className="flex h-screen w-full flex-col items-center justify-center bg-white text-[#1A2238]">
        <h1 className="text-9xl font-extrabold tracking-widest text-[#1A2238]">
          404
        </h1>
        <div className="absolute rotate-12 rounded bg-secondary px-2 text-sm text-white">
          Page Not Found
        </div>
        <span className="relative block border border-current bg-[#1A2238] px-12 py-3 font-bold">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go Home
          </button>
        </span>
      </main>
    </>
  );
}
