/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Imagenes } from "../../../generated/graphql";
interface Iprops {
  // id: number
  img: Imagenes;
  // slug: string
  // titulo: string
  // firtsPrice: number
  // price: number
  // categoty1: string
  // rebaja: boolean
  // amount: number
  // openModal: () => void
}
export const CardProducto2 = ({ img }: Iprops) => {
  return (
    <div className="bg-red-300 w-full">
      <div className="bg-primary-600 aspect-[16/9] relative">
        <img
          className="shadow-lg rounded-lg"
          src={img.url!}
          alt="img"
        />
      </div>
      <div></div>
    </div>
  );
};
