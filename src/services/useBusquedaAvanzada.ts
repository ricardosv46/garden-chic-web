import { useGetBusquedaAvanzadaQuery } from "./../generated/graphql";

interface Iprops {
  categoriaSlug?: string;
  destacado: string;
  numeroPagina: number;
  pagina: number;
  precio: number[];
  tipoOrdenacion: string;
}

export const useBusquedaAvanzada = (variable: Iprops) => {
  const { data, loading } = useGetBusquedaAvanzadaQuery({
    fetchPolicy: "network-only",
    variables: {
      ...variable,
    },
  });

  const db = data?.GetBusquedaAvanzada?.data ?? [];

  return {
    loading,
    db,
  };
};
