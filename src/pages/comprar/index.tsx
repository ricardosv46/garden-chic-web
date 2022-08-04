/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Container from "../../components/container";
import useForm from "../../hooks/useForm";
import { useDepartamentos } from "../../services/useDepartamentos";
import { useDistritos } from "../../services/useDistritos";
import { useProvincias } from "../../services/useProvincias";
import { usePedido } from "../../services/usePedido";
import { useCarritoContext } from "../../context/carrito/CarritoState";
import FormMercadopago from "../../components/forms/FormMercadopago";
import { useRouter } from "next/router";
import CheckPago from "../../components/forms/CheckPago";
import FormEnvio from "../../components/forms/FormEnvio";
import { getSession } from "next-auth/react";
interface PayProps {
  payment_method_id: string;
  token: string;
  installments: number;
}

const Comprar = () => {
  const { createPedido } = usePedido();
  const [show, setShow] = useState("formulario");
  const [error, setError] = useState(false);

  const {
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
  } = useForm({
    ruc: "",
    razonSocial: "",
    celular: "",
    direccion: "",
    venta: "",
    depa: "",
    prov: "",
    dist: "",
  });
  const { carrito, total, VaciarCarrito } = useCarritoContext();

  const productos = carrito.map(({ title, amount, price, id }) => ({
    titulo: title,
    imagenPrincipal: "1",
    cantidad: amount,
    precio: price,
    productoId: id,
    total: amount * price,
  }));

  const pago = async ({ payment_method_id, token, installments }: PayProps) => {
    await createPedido({
      input1: {
        estado: "1",
        tipoPago: 1,
        medioPago: payment_method_id,
        tipoVenta: venta,
        numeroOperacion: "",
        tipoEnvio: 1,
        precioEnvio: 0,
        precioTotal: 12,
        direccionEnvio: direccion,
      },
      input2: productos,
      input3: {
        ruc: venta === "factura" ? ruc : "",
        razonSocial: venta === "factura" ? razonSocial : "",
      },
      input4: {
        email: "",
        celular,
        DeparCodi: Number(depa),
        ProvCodi: Number(prov),
        DistCodi: Number(dist),
      },
      input5: {
        type_save: 0,
        source_id: token,
        payment_method_id,
        installments,
        tipo_tarjeta: 0,
      },
    }).then((res) => {
      if (res?.ok) {
        setShow("pagado");
        VaciarCarrito();
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    });
  };


  return (
    <Container className="py-10">
      {show === "formulario" && (
        <FormEnvio
          {...{
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
          }}
        />
      )}

      {show === "pagar" && (
        <FormMercadopago
          pago={pago}
          setShow={setShow}
          total={total}
          error={error}
        />
      )}

      {show === "pagado" && <CheckPago />}
    </Container>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);

  // if (!session)
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   }

  return {
    props: {
      session: session,
    },
  };
};

export default Comprar;
