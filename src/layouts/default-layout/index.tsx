import { Footer, Navbar } from "@/components";
import React from "react";

type Props = {
  children: JSX.Element;
};

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-h80">{children}</div>
      <Footer />
    </div>
  );
};
