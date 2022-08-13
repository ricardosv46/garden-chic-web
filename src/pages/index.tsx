import type { NextPage } from "next";
import Banner from "../components/banner";
import Contactanos from "../sections/Home/contactanos";
import NuestrosClientes from "../sections/Home/nuestrosClientes";
import QuePodemosHacer from "../sections/Home/quePodemosHacer";
import Servicios from "../sections/Home/servicios";
import Proyects from "../sections/Home/proyects";
import OpenGraph from "../components/openGraph";
import { useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { DataGeneral } from 'src/data/dataGeneral'

const Home: NextPage = () => {
  const { Home } = DataGeneral
  const { status, data } = useSession() as {
    status: string;
    data: { user: any };
  };
  // console.log('data', data)

  useEffect(() => {
    const sesion = async () => {
      const res = await getSession();
      console.log("sesion", res);
    };

    sesion();
  }, []);

  return (
    <>
      <OpenGraph
        title="GardenChic - Inicio"
        link="GardenChic"
        description="Somos expertos en el cuidado de tu jardin."
        domain="garden-chic-web.vercel.app"
        img="https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg"
        keywords="jardines, jardin, plantas"
        url="https://garden-chic-web.vercel.app/"
      />
      <Banner data={Home.Banner} />
      <QuePodemosHacer data={Home.QuePodemosHacer} />
      <Servicios data={Home.Iconos} />
      <Proyects />
      <NuestrosClientes data={Home.EllosConfian} />
      <Contactanos data={Home.OptionForm} />
    </>
  );
};

export default Home;
