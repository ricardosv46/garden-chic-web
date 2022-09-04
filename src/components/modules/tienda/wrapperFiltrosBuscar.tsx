import Container from "@components/container";
import InputSearch from "@components/inputs/InputSearch";
import { Dispatch, ReactNode } from "react";
import { SetStateAction } from "react";

interface Iprops {
  isOpenFilter: boolean;
  setIsOpenFilter: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const WrapperFiltrosBuscar = ({
  isOpenFilter,
  setIsOpenFilter,
  children
}: Iprops) => {
  return (
    <Container className="lg:flex md:pb-6 gap-10 ">
      <div className="flex flex-row gap-x-2 sm:gap-x-7 w-full py-5 ">
        <div className="w-1/2 lg:w-1/4 ">
          <button
            onClick={() => setIsOpenFilter(!isOpenFilter)}
            className="w-full bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800"
          >
            Filtros
          </button>
        </div>
        <div className="w-1/2 lg:w-3/4 ">
          {children}
        </div>
      </div>
    </Container>
  );
};
