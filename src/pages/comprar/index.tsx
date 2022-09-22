/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Container from '../../components/container'
import useForm from '../../hooks/useForm'
import { useDepartamentos } from '../../services/useDepartamentos'
import { useDistritos } from '../../services/useDistritos'
import { useProvincias } from '../../services/useProvincias'
import { usePedido } from '../../services/usePedido'
import { useCarritoContext } from '../../context/carrito/CarritoState'
import FormMercadopago from '../../components/forms/FormMercadopago'
import { useRouter } from 'next/router'
import CheckPago from '../../components/forms/CheckPago'
import FormEnvio from '../../components/forms/FormEnvio'
import { getSession } from 'next-auth/react'
import FormEfectivo from '@components/forms/FormEfectivo'
import FormTransferencia from '@components/forms/FormTransferencia'
import TipoPagoBancos from '@components/forms/TipoPagoBancos'
import TipoPagoEfectivo from '@components/forms/TipoPagoEfectivo'
import SubirArchivo from '@components/forms/SubirArchivo'
import ModalLoading from '@components/modal/modalLoading'
interface PayProps {
	payment_method_id: string
	token: string
	installments: number
}

const Comprar = () => {
	const { createPedido, loadingPedido } = usePedido()
	const [show, setShow] = useState('formulario')
	const [image, setImage] = useState(null)
	const [medioPago, setMediopago] = useState('')

	const [error, setError] = useState(false)
	const { carrito, total, VaciarCarrito } = useCarritoContext()
	console.log({ total })

	const { ruc, razonSocial, celular, direccion, venta, depa, prov, dist, recojo, tipoPago, onChange, setStateMutation } = useForm({
		ruc: '',
		razonSocial: '',
		celular: '',
		direccion: '',
		venta: '',
		depa: '',
		prov: '',
		dist: '',
		recojo: '',
		tipoPago: ''
	})

	const productos = carrito.map(({ title, amount, price, id }) => ({
		titulo: title,
		imagenPrincipal: '1',
		cantidad: amount,
		precio: price,
		productoId: id,
		total: amount * price
	}))

	const pagoTarjeta = async ({ payment_method_id, token, installments }: PayProps) => {
		await createPedido({
			input1: {
				tipoPago: 3,
				medioPago: tipoPago,
				tipoVenta: venta,
				numeroOperacion: '',
				tipoEnvio: recojo,
				precioEnvio: 0,
				precioTotal: total,
				direccionEnvio: recojo === 'Tienda' ? '' : direccion
			},
			input2: productos,
			input3: {
				ruc: venta === 'factura' ? ruc : '',
				razonSocial: venta === 'factura' ? razonSocial : ''
			},
			input4: {
				email: '',
				celular,
				DeparCodi: Number(depa),
				ProvCodi: Number(prov),
				DistCodi: Number(dist)
			},
			input5: {
				type_save: 0,
				source_id: token,
				payment_method_id,
				installments,
				tipo_tarjeta: 0
			}
		}).then((res) => {
			if (res?.ok) {
				setShow('pagado')
				VaciarCarrito()
			} else {
				setError(true)
				setTimeout(() => {
					setError(false)
				}, 5000)
			}
		})
	}

	const pagoSinTarjeta = async (tipoPagoUpload: number) => {
		await createPedido({
			input1: {
				tipoPago: tipoPagoUpload,
				medioPago: medioPago,
				tipoVenta: venta,
				numeroOperacion: '',
				tipoEnvio: recojo,
				precioEnvio: 0,
				precioTotal: total,
				direccionEnvio: recojo === 'Tienda' ? '' : direccion
			},
			input2: productos,
			input3: {
				ruc: venta === 'factura' ? ruc : '',
				razonSocial: venta === 'factura' ? razonSocial : ''
			},
			input4: {
				email: '',
				celular,
				DeparCodi: Number(depa),
				ProvCodi: Number(prov),
				DistCodi: Number(dist)
			},
			voucher: image
		}).then((res) => {
			if (res?.ok) {
				setShow('pagado')
				VaciarCarrito()
			} else {
				setError(true)
				setTimeout(() => {
					setError(false)
				}, 5000)
			}
		})
	}

	useEffect(() => {
		setStateMutation('prov', '')
	}, [depa])

	useEffect(() => {
		setStateMutation('dist', '')
	}, [prov])

	return (
		<>
			<Container className='py-10'>
				{show === 'formulario' && (
					<FormEnvio
						{...{
							setShow,
							ruc,
							tipoPago,
							razonSocial,
							celular,
							direccion,
							venta,
							recojo,
							depa,
							prov,
							dist,
							onChange,
							setStateMutation
						}}
					/>
				)}

				{show === 'EfectivoIdUpload' && (
					<SubirArchivo {...{ setImage, image, setShow, tipoPago, onChange, total, show, pagoSinTarjeta, loadingPedido }} />
				)}

				{show === 'TransferenciaIdUpload' && (
					<SubirArchivo {...{ setImage, image, setShow, tipoPago, onChange, total, show, pagoSinTarjeta, loadingPedido }} />
				)}

				{show === 'TransferenciaId' && <FormTransferencia {...{ setShow, tipoPago, onChange, total }} />}

				{show === 'EfectivoId' && <FormEfectivo {...{ setShow, tipoPago, onChange, total }} />}

				{show === 'Efectivo' && <TipoPagoEfectivo {...{ setShow, tipoPago, onChange, setMediopago }} />}

				{show === 'Transferencia' && <TipoPagoBancos {...{ setShow, tipoPago, onChange, setMediopago }} />}

				{show === 'Tarjeta' && <FormMercadopago {...{ setShow, total, error }} pago={pagoTarjeta} />}

				{show === 'pagado' && <CheckPago />}
			</Container>
			<ModalLoading isOpen={loadingPedido} />
		</>
	)
}

export const getServerSideProps = async (ctx: any) => {
	const session = await getSession(ctx)
	console.log(session)

	if (!session)
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}

	return {
		props: {
			session: session
		}
	}
}

export default Comprar
