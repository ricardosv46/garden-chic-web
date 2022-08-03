import { BreadCrumb } from "@components/breadcrumb";
import Container from "@components/container";
import React from "react";

interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export const LayoutTienda = ({ children }: Iprops) => {
  return (
    <div>
      <Container className="mt-6 py-4">
        <BreadCrumb />
      </Container>
      {children}
    </div>
  );
};
