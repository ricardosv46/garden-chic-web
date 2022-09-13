/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../../components/container";
import { dataProyects } from "../../data/dataProyectos";
import { Tittle, Subttitles, SelectSubtittles } from "@components/common";
import { ProyectItem } from "@components/proyects";

export enum EnumServicios {
  Paisajismo = "Paisajismo",
  Impermeabilizacion = "Impermeabilización",
  // Impermeabilizacionmantoasfaltico = 'Impermeabilización con manto asfáltico',
  Techosverdes = "Techos verdes",
  SistemadeRiegoTecnificado = "Riego Tecnificado",
  Mantenimientoareasverdes = "Mantenimiento de áreas verdes",
  JardinVertical = "Jardín Vertical",
}

const DataSubTittle = [
  { tittle: "Todo", value: "todo" },
  { tittle: "Eventos", value: "Eventos" },
  { tittle: "Jardines", value: "Jardín Vertical" },
  { tittle: "Mantenimiento", value: "Mantenimiento de áreas verdes" },
  { tittle: "Paisajismo", value: "Paisajismo" },
  { tittle: "Sistema de Riego", value: "Riego Tecnificado" },
  { tittle: "Impermeabilización", value: "Impermeabilización" },
  { tittle: "Techos Verdes", value: "Techos verdes" },
  { tittle: "Vivero", value: "Vivero" },
];
const Proyects = () => {
  const [show, setShow] = useState(false);
  const [ProyectosFiltrado, setProyectosFiltrados] = useState(dataProyects);
  const [ServiciosFilter, setServiciosFilter] = useState("todo");

  const FilterProyect = () => {
    if (ServiciosFilter === "todo") {
      setProyectosFiltrados(dataProyects);
    } else {
      setProyectosFiltrados(
        dataProyects.filter((data) =>
          data.servicios?.icon?.includes(ServiciosFilter)
        )
      );
    }
  };

  useEffect(() => {
    FilterProyect();
  }, [ServiciosFilter]);

  return (
    <Container bgColor="bg-[#F9FAFB]" className="pt-10 pb-20">
      <div className="flex flex-col items-center justify-center ">
        <Tittle tittle="Proyectos" />
        {/* sub Tittle Desktop */}
        <Subttitles onChange={setServiciosFilter} data={DataSubTittle} />
        {/* sub Tittle Mobile */}
        <SelectSubtittles onChange={setServiciosFilter} data={DataSubTittle} />
      </div>
      {/* 6 imagenes por defecto */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-10 ">
        {ProyectosFiltrado.map((obj, index) => {
          if (index < 6) {
            return <ProyectItem key={index} data={obj} />;
          }
        })}
      </div>
      {/* Boton cargas más */}
      <div className={`flex justify-center mt-10 ${show ? "hidden" : "block"}`}>
        {!show && ProyectosFiltrado.length > 5 && (
          <button
            onClick={() => setShow(true)}
            className="bg-garden-option1 text-white px-8 py-2.5 rounded-full ease-out duration-300  font-garden_regular"
          >
            Cargar más
          </button>
        )}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-5">
        {show &&
          ProyectosFiltrado.map((obj, index) => {
            if (index > 5) {
              return <ProyectItem key={index} data={obj} />;
            }
          })}
      </div>
    </Container>
  );
};

export default Proyects;
