import { useGetBusquedaAvanzadaLazyQuery, useGetBusquedaAvanzadaQuery } from "./../generated/graphql";

interface Iprops {
  categoriaSlug?: string | null;
  destacado: string;
  numeroPagina: number;
  pagina: number;
  precio: number[];
  tipoOrdenacion: string;
}

export const useBusquedaAvanzada = (inputs:Iprops) => {
  const {loading,data} =
    useGetBusquedaAvanzadaQuery({
      fetchPolicy: "network-only",
      variables:{
        ...inputs
      }
    });


  return {
    loading,
    data
  };
};
