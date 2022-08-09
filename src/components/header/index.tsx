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
  const [cerrar, setCerrar] = useState(false);//vista logout o cerrar sesion
  const { OpenCarrito } = useCarritoContext();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    localStorage.removeItem("token");
  };

  // const [aparecer, setAparecer] = useState(false)
  const { status, data } = useSession();


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

  useEffect(() => {
    console.log(cerrar)
  }, [cerrar])

  return (
    <>
      <div
        className={`hidden  sticky w-full lg:block ${scrollDirection === "down" ? "-top-24" : "top-0"
          }  bg-white z-40 shadow-lg  transition-all duration-500`}
      >
        <MenuDestokp
          onOpen={() => OpenCarrito(true)}
          setModalLogin={setModalLogin}
          setCerrar={setCerrar}
          cerrar={cerrar}
          handleSignOut={handleSignOut}
        />
      </div>
      <div
        className={`lg:hidden sticky w-full  ${scrollDirection === "down" ? "-top-24" : "top-0"
          }  bg-white z-40 shadow-lg  transition-all duration-500`}
      >
        <MenuMobile
          onOpen={() => OpenCarrito(true)}
          setModalLogin={setModalLogin}
          setCerrar={setCerrar}
          cerrar={cerrar}
          handleSignOut={handleSignOut}
        />
      </div>


      {/* isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} */}
      {/* <SidebarCart />
      {status !== "authenticated" && (
        <ModalLogin isOpen={modalLogin} onClose={() => setModalLogin(false)} />
      )} */}
    </>
  );
};

export default Header;
