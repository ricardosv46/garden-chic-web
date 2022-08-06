import { useGetBusquedaAvanzadaLazyQuery, useGetBusquedaAvanzadaQuery } from "./../generated/graphql";

interface Iprops {
  categoriaSlug?: string | null;
  destacado: string;
  numeroPagina: number;
  pagina: number;
  precio: number[];
  tipoOrdenacion: string;
}

export const useBusquedaAvanzada = (inputs: Iprops) => {
  const { loading, data } =
    useGetBusquedaAvanzadaQuery({
      fetchPolicy: "network-only",
      variables: {
        ...inputs
      }
    });


  return {
    loading,
    data
  };
};

{/* Falta optimizar */ }
export const useBusquedaAvanzadaLazy = () => {
  const [MutationUseGetBusquedaAvanzada, { loading }] = useGetBusquedaAvanzadaLazyQuery({
    onError: (err) => {
      console.log('onError Busqueda Avanzada', err?.graphQLErrors[0])
    }
  })

  const FunctionBusquedaAvanzada = async (FilterOptions: Iprops) => {
    try {
      const res = await MutationUseGetBusquedaAvanzada({
        variables: FilterOptions
      })
      return res?.data?.GetBusquedaAvanzada.data || []
    }
    catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }

  }
  return { FunctionBusquedaAvanzada, loading }
}