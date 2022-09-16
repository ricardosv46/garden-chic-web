/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useReducer, useState } from 'react'

export interface ModalInitialState {
	isOpen: boolean
}

type Props = {
	children: JSX.Element | JSX.Element[]
}

export interface ModalContextValue extends ModalInitialState {
	openModal: () => void
	closeModal: () => void
	toggleModal: () => void
	changeModal: (payload: boolean) => void
}
export const initialState: ModalInitialState = {
	isOpen: false
}

const ModalContext = createContext<ModalContextValue>({} as ModalContextValue)

const ModalState = ({ children }: Props) => {
	const [state, setState] = useState(initialState)
	/*   const toast = useToast() */

	const openModal = async () => {
		setState((prev) => ({ ...prev, isOpen: true }))
	}
	const closeModal = async () => {
		setState((prev) => ({ ...prev, isOpen: false }))
	}

	const toggleModal = async () => {
		setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
	}

	const changeModal = async (payload: boolean) => {
		setState((prev) => ({ ...prev, isOpen: payload }))
	}

	return (
		<ModalContext.Provider
			value={{
				...state,
				openModal,
				closeModal,
				toggleModal,
				changeModal
			}}>
			{children}
		</ModalContext.Provider>
	)
}

export const useModalContext = () => useContext(ModalContext)

export default ModalState
