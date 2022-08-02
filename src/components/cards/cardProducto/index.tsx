import React, { useState } from "react";
import { Show } from "@components/show";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCarritoContext } from "../../../context/carrito/CarritoState";
import { Imagenes } from "../../../generated/graphql";
import { FiShoppingCart,FiEye } from "react-icons/fi";
interface IProps {
  id: number;
  img: Imagenes;
  slug: string;
  titulo: string;
  firtsPrice: number;
  price: number;
  categoty1: string;
  rebaja: boolean;
  amount: number;
  openModal: () => void;
}

const CardProducto = ({
  id,
  img,
  titulo,
  firtsPrice,
  price,
  categoty1,
  slug,
  rebaja,
  amount,
  openModal,
}: IProps) => {
  const { agregarCarrito } = useCarritoContext();
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <div className="w-full  rounded-xl ">
      <div
        onClick={() => router.push(`/tienda/${slug}`)}
        className="border-b-2 cursor-pointer relative flex"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Image
          loading="lazy"
          src={img.url!}
          width={1080}
          height={1080}
          className="rounded-t-2xl"
          alt="blogs"
        />
        {/* w-0 h-0 hover:top-0 hover:bottom-0 hover:left-0 hover:right-0 */}
        <div
          className={`absolute transition-all ease-in duration-300 bg-gray-500 flex flex-row justify-center items-center gap-2 ${
            hover
              ? "bg-gradiant-primary inset-0 rounded-t-xl scale-100"
              : " inset-[50%]  rounded-full scale-0"
          } `}
        >
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
            <button className=""><FiShoppingCart /></button>
          </div>
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
            <button className=""><FiEye /></button>
          </div>
          {/* <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
            <button className="">shop</button>
          </div> */}
        </div>

        {/* Items */}
        <Show condition={rebaja}>
          {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
          <div className="absolute top-0 left-0 w-14 h-6 bg-[#3F72AF] rounded-tl-xl  text-white flex justify-center items-center z-10">
            <span className="ml-2">Sale!</span>
          </div>
          <div className="absolute top-0 left-2 w-14 h-6 bg-[#3F72AF] transform -skew-x-[18deg] z-0"></div>
        </Show>
      </div>
      <div className="p-2 border-b-2 border-x-2 rounded-b-xl">
        {/* <div className="flex gap-3 items-center">
          <p className="text-gray-900 text-md font-semibold ease-in-out duration-300 hover:text-primary-300 cursor-pointer">
            {categoty1}
          </p>
        </div> */}
        {/* <div className="w-5 h-0.5 bg-primary-300 my-5"></div> */}

        {/* title product */}
        <p
          onClick={() => router.push(`/tienda/${slug}`)}
          className="text-gray-900 text-xl font-bold ease-in-out duration-300 hover:text-primary-300 cursor-pointer capitalize"
        >
          {titulo}
        </p>
        <div className="flex flex-col h-32 justify-between">
          {/* Price old and current */}
          <div className="flex flex-col">
            {price < firtsPrice && (
              <div className="flex flex-row gap-2">
                <p className="text-gray-300 font-bold line-through">
                  S/. {firtsPrice.toFixed(2)}
                </p>
                <p className="text-red-700  ">
                  -{((firtsPrice - price) * 100) / firtsPrice}%
                </p>
              </div>
            )}
            <p className="text-gray-600 text-xl font-black  ">
              S./ {price.toFixed(2)}
            </p>
          </div>

          {/* add */}
          <button
            className="w-full py-2 border-primary-300 border-2 hover:bg-primary-300 ease-in-out duration-300 text-primary-300 hover:text-white font-bold text-sm "
            onClick={() => {
              agregarCarrito({
                id,
                img: img.url!,
                title: titulo,
                firtsPrice,
                price,
                categoty1,
                rebaja,
                amount,
              });
              openModal();
            }}
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
