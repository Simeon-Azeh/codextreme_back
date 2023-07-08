import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0xf000" />
          <meta property="og:url" content="https://codextreme.infinitloop.io" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://codextreme.infinitloop.io" />
          <meta property="twitter:url" content="https://codextreme.infinitloop.io" />
          <meta name="twitter:creator" content="@CodeXtreme" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="CodeXtreme" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="CodeXtreme" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
