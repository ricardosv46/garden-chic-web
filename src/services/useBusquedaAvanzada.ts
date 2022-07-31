import { useGetBusquedaAvanzadaLazyQuery } from "./../generated/graphql";

interface Iprops {
  categoriaSlug?: string | null;
  destacado: string;
  numeroPagina: number;
  pagina: number;
  precio: number[];
  tipoOrdenacion: string;
}

export const useBusquedaAvanzada = () => {
  const [FiltrarBusquedaMutation, { data, loading, error }] =
    useGetBusquedaAvanzadaLazyQuery();

  const FiltrarBusqueda = async (payload: Iprops) => {
    try {
      const res = await FiltrarBusquedaMutation({
        variables: payload,
        fetchPolicy: "network-only",
        onError: (err) => {
          console.log("onError Create Pedido", err?.graphQLErrors[0]);
        },
      });
      return { res, status: true, code: 201 };
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return {
    FiltrarBusqueda,
    loading,
    data,
  };
};
