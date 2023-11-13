import Header from "@/components/head";
import PageLayout from "@/components/shared/pageLayout";
import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Header title="Page not found - CodeExtreme" />
      <PageLayout>
        <div className="text-gray-700 flex flex-col justify-center items-center my-14">
          <h1 className="text-black text-9xl font-extrabold tracking-widest">
            404
          </h1>
          <p className="py-5">
            Page Not Found
          </p>
          <Link className="underline" href="/">Go Home</Link>
        </div>
      </PageLayout>
    </>
  );
}
