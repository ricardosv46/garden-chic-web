/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useState } from "react";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import Header from "../components/header";
import CarritoState from "../context/carrito/CarritoState";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo";
import { SessionProvider } from "next-auth/react";
import { ScreenProvider } from "src/context/screen/ScreenProvider";
import { useContext } from "react";
import { ScreenContext } from "../context/screen/ScreenContext";
import { Show } from "@components/show";
import { useRouter } from "next/router";
import { SCREEN_DATA } from "src/context/screen/data/ScreenData";
import { ScreenReducer } from "src/context/screen/ScreenReducer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ScreenProvider>
            <CarritoState>
              <Header />
              <Component {...pageProps} />
            </CarritoState>     
        </ScreenProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
