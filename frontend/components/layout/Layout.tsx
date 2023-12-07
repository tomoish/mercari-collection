import Head from "next/head";
import React from "react";

import Header from "@/components/layout/Header";

const Layout = ({
  children,
  title = "Reading Record",
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className=" bg-fixed bg-white max-h-full">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
