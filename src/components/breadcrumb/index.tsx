/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { FiHome } from "react-icons/fi";
export const BreadCrumb = () => {
  const { pathname, push, query } = useRouter();
  const Ruta = pathname.split("/");
  console.log(Ruta)
  if (Ruta.length > 2) Ruta.pop();
  Ruta.push(query.slug ? String(query.slug) : "");
  return (
    <div className="flex flex-row justify-between text-primary-800">
      <div>
        <h4 className="text-2xl font-medium capitalize">Tienda</h4>
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        <div onClick={() => push(`/`)}>
          <FiHome />
        </div>
        {Ruta.map((obj, i) =>
          obj !== "" ? (
            <div key={i} className="flex flex-row gap-1">
              <span className="mx-1">/</span>
              <div className="capitalize">
                {obj}
              </div>
            </div>
          ) : null
        )}
        {/**/}
      </div>
    </div>
  );
};

