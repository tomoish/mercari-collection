import Head from "next/head";
import React from "react";

import Footer from "@/components/layout/Footer";
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
        <Footer />
      </div>
    </>
  );
};

export default Layout;
