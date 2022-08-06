import { useCarritoContext } from "@context/carrito/CarritoState";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FormLogin from "../authForm/formLogin";
import FormRegister from "../authForm/formRegister";
import MenuDestokp from "../menu/desktop/index";
import MenuMobile from "../menu/mobile";
import Modal from "../modal";
import ModalLogin from "../modal/modalLogin";
import SidebarCart from "../sidebarCart";

const Header = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [cerrar, setCerrar] = useState(false);
  const { OpenCarrito } = useCarritoContext();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    localStorage.removeItem("token");
  };

  // const [aparecer, setAparecer] = useState(false)
  const { status, data } = useSession();

  console.log(status);

  // useEffect(() => {
  //   if (status !== 'loading' && status === 'authenticated') {
  //     console.log(status)
  //     setAparecer(true)
  //   } else {
  //     setAparecer(false)
  //   }
  // }, [status])

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    console.log(lastScrollY);

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <>
      <div
        className={`hidden sticky w-full   lg:block ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        }  bg-white z-40 shadow-lg  transition-all duration-500`}
      >
        <MenuDestokp
          onOpen={() => OpenCarrito(true)}
          setModalLogin={() => {
            setModalLogin(true);
            setCerrar(!cerrar);
          }}
        />
      </div>
      <div
        className={`lg:hidden sticky w-full  ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        }  bg-white z-40 shadow-lg  transition-all duration-500`}
      >
        <MenuMobile
          onOpen={() => OpenCarrito(true)}
          setModalLogin={() => {
            setModalLogin(true);
            setCerrar(!cerrar);
          }}
        />
      </div>

      {status === "authenticated" && (
        <>
          {cerrar && (
            <div className="relative mx-auto my-0 w-[90%] xl:w-[1280px]">
              <div className="absolute top-3 bg-slate-100 rounded-lg z-50 w-60 p-5 -right-[105px]">
                <div className=" justify-center w-full absolute -top-2.5 left-0 z-50 flex">
                  <div className="h-5 w-5 bg-slate-100 rotate-45"></div>
                </div>

                <button
                  className="bg-red-500 mt-5 rounded-lg w-full py-3 text-white font-bold"
                  onClick={handleSignOut}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {/* isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} */}
      <SidebarCart />
      {status !== "authenticated" && (
        <ModalLogin isOpen={modalLogin} onClose={() => setModalLogin(false)} />
      )}
    </>
  );
};

export default Header;
