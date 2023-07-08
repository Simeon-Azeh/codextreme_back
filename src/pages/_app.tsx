import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
