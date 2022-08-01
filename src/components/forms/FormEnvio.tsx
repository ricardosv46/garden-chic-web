import { SelectSearch } from "@components/SelectSearch";
import { useRouter } from "next/router";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useCarritoContext } from "../../context/carrito/CarritoState";
import useForm from "../../hooks/useForm";
import { useDepartamentos } from "../../services/useDepartamentos";
import { useDistritos } from "../../services/useDistritos";
import { usePedido } from "../../services/usePedido";
import { useProvincias } from "../../services/useProvincias";
import InputFloat from "../inputs/InputFloat";
import Select from "../select";

interface PayProps {
  payment_method_id: string;
  token: string;
  installments: number;
}

interface IProps {
  setShow: React.Dispatch<React.SetStateAction<string>>;
  venta: string;
  depa: string;
  prov: string;
  dist: string;
  ruc: string;
  razonSocial: string;
  celular: string;
  direccion: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  setStateMutation: (key: string, value: string | number) => void;
}

const FormEnvio = ({
  setShow,
  ruc,
  razonSocial,
  celular,
  direccion,
  venta,
  depa,
  prov,
  dist,
  onChange,
  setStateMutation,
}: IProps) => {
  const { db: departamentos } = useDepartamentos();

  const { db: provincias } = useProvincias({ DepCode: depa.toString() });
  const { db: distritos } = useDistritos({ ProCode: prov.toString() });

  const dataDepartamentos = departamentos.map((depa) => ({
    value: depa?.DeparCodi!,
    titulo: depa?.DeparNom!,
  }));

  const dataProvincias = provincias.map((prov) => ({
    value: prov?.ProvCodi!,
    titulo: prov?.ProvNom!,
  }));
  const dataDistritos = distritos.map((prov) => ({
    value: prov?.DistCodi!,
    titulo: prov?.DistNom!,
  }));

  return (
    <div className="flex justify-center ">
      <div className="w-full md:w-2/5 h-auto ">
        <h2 className="text-primary-300 font-bold text-4xl xl:text-6xl text-center  ">
          Completa tu información
        </h2>
        <div>
          <form
            onSubmit={() => setShow("pagar")}
            className="flex flex-col gap-y-5 mt-10  "
          >
            <Select
              required
              label="Tipo de recibo"
              name="venta"
              value={venta}
              onChange={onChange}
              data={[
                { value: "boleta", titulo: "Boleta" },
                { value: "factura", titulo: "Factura" },
              ]}
            />

            {/* <SelectSearch
              tittle="Tipo de recibo"
              data={[
                { value: "boleta", titulo: "Boleta" },
                { value: "factura", titulo: "Factura" },
              ]}
              name="venta"
              value={venta}
              setStateMutation={setStateMutation}
            /> */}

            {venta === "factura" && (
              <>
                <InputFloat
                  required
                  type="text"
                  label="Ruc"
                  name="ruc"
                  id="ruc"
                  htmlFor="ruc"
                  value={ruc}
                  onChange={onChange}
                />
                <InputFloat
                  required
                  type="text"
                  label="Razon Social"
                  name="razonSocial"
                  id="razonSocial"
                  htmlFor="razonSocial"
                  value={razonSocial}
                  onChange={onChange}
                />
              </>
            )}

            <div className="flex flex-col xl:flex-row gap-5 ">
              {/* <Select
                required
                label="Departamento"
                name="depa"
                value={depa}
                onChange={onChange}
                data={dataDepartamentos!}
              /> 
              
              <Select
                required
                disabled={depa ? false : true}
                label="Provincia"
                name="prov"
                value={prov}
                onChange={onChange}
                data={dataProvincias!}
              />

              <Select
                disabled={prov ? false : true}
                label="Distrito"
                name="dist"
                value={dist}
                onChange={onChange}
                data={dataDistritos!}
                required
              />
              */}

              <SelectSearch
                tittle="Departamento"
                data={dataDepartamentos}
                name="depa"
                value={depa}
                setStateMutation={setStateMutation}
              />

              <SelectSearch
                tittle="Provincia"
                data={dataProvincias}
                name="prov"
                value={prov}
                disabled={depa ? false : true}
                setStateMutation={setStateMutation}
              />
              <SelectSearch
                tittle="Distrito"
                data={dataDistritos}
                name="dist"
                value={dist}
                disabled={prov ? false : true}
                setStateMutation={setStateMutation}
              />
            </div>

            <InputFloat
              required
              type="number"
              label="Celular"
              name="celular"
              id="celular"
              htmlFor="celular"
              value={celular}
              maxLength={9}
              onChange={onChange}
            />
            <InputFloat
              required
              type="text"
              label="Dirección"
              name="direccion"
              id="direccion"
              htmlFor="direccion"
              maxLength={255}
              value={direccion}
              onChange={onChange}
            />

            <div className="flex justify-center pt-5">
              <button
                type="submit"
                className="bg-primary-300 text-white border-2 px-10 py-4 rounded-full uppercase duration-300 ease-in-out hover:border-primary-300  hover:bg-white hover:text-primary-300"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEnvio;
