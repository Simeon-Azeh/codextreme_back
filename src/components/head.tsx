import Head from "next/head";
import React from "react";

export default function Header({
  title = "CodeXtreme",
  description = "InfinitLoop invites you to CodeXtreme, a 4-day Seasonal Hackathon to unleash your potential! Join our 2023-2024 season launch Now!",
  image = "https://res.cloudinary.com/blackhole-inc/image/upload/v1688764605/logo-full-black_ntwzds.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no"
      />
      <script src="//embed.typeform.com/next/embed.js" async />
    </Head>
  );
}
