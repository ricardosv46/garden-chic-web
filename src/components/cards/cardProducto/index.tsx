import React, { useState } from "react";
import { Show } from "@components/show";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCarritoContext } from "../../../context/carrito/CarritoState";
import { Imagenes } from "../../../generated/graphql";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { formatPercent } from "@utils";

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
    <div>
   

      <div className="w-full  rounded-xl  ">
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
          <div
            className={`absolute transition-all ease-in duration-300 bg-gray-500 flex flex-row justify-center items-center gap-2 ${
              hover
                ? "bg-gradiant-primary inset-0 rounded-t-xl scale-100"
                : " inset-[50%]  rounded-full scale-0"
            } `}
          >
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
              <button className="">
                <FiShoppingCart />
              </button>
            </div>
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
              <button className="">
                <FiEye />
              </button>
            </div>
          </div>

          {/* Items */}
          <Show condition={rebaja}>
            {/* Sale */}
            <div className="absolute top-0 left-0 w-14 h-6 bg-[#3F72AF] rounded-tl-xl  text-white flex justify-center items-center z-10">
              <span className="ml-2">Sale!</span>
            </div>

            {/* Top o destacado */}
            <div className="absolute top-0 left-2 w-14 h-6 bg-[#3F72AF] transform -skew-x-[18deg] z-0"></div>
            <div className="absolute top-0 right-2 w-6 h-14 bg-red-700 text-white flex justify-center items-center z-10">
              <FiHeart className="mt-2" />
            </div>
            <div className="absolute top-2 right-2 w-6 h-14  bg-red-700 transform -skew-y-[30deg] z-0"></div>
            <div className="absolute top-2 right-2 w-6 h-14  bg-red-700 transform skew-y-[30deg] z-0"></div>
          </Show>
        </div>
        <div className="p-2 border-b-2 border-x-2 rounded-b-xl flex flex-col  md:flex-row">
          <div className="w-full md:w-5/6">
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
                      {formatPercent(firtsPrice, price)}%
                    </p>
                  </div>
                )}
                <p className="text-gray-600 text-xl font-black  ">
                  S./ {price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          {/* group button bottom */}
          <div className="w-full my-2 md:w-1/6  flex flex-row md:flex-col gap-4 justify-center items-center">
            <button
              className="w-8 h-8 border border-[#3F72AF] rounded-md hover:bg-[#F9F7F7] "
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
              <FiShoppingCart className="mx-auto my-auto" />
            </button>
            <button className="w-8 h-8 border border-[#3F72AF] rounded-md hover:bg-[#F9F7F7]">
              <FiEye className="mx-auto my-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
