import { useCreatePedidoMutation } from '../generated/graphql'

interface ICreateProps {
	input1: {
		tipoPago: number
		medioPago: string | null
		tipoVenta: string
		numeroOperacion: string
		tipoEnvio: string
		precioEnvio: number
		precioTotal: number
		direccionEnvio: string
	}
	input2: Iproductos[]
	input3: {
		ruc: string
		razonSocial: string
	}
	input4: {
		email: string
		celular: string
		DeparCodi: number
		ProvCodi: number
		DistCodi: number
	}
	input5?: {
		installments: number
		source_id: string
		type_save: number
		payment_method_id: string
		tipo_tarjeta: number
	}
	voucher?: any
}

interface Iproductos {
	titulo: string
	imagenPrincipal: string
	cantidad: number
	precio: number
	productoId: number
	total: number
}

export const usePedido = () => {
	const [CreatePedido, { loading: loadingPedido }] = useCreatePedidoMutation({
		onError: (err) => {}
	})

	const createPedido = async ({ input1, input2, input3, input4, input5, voucher }: ICreateProps) => {
		try {
			const res = await CreatePedido({
				variables: {
					input1,
					input2,
					input3,
					input4,
					input5,
					voucher
				}
			})

			if (res.data?.CreatePedido) {
				return { ok: true }
			}
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}
	return {
		loadingPedido,
		createPedido
	}
}
