import React, {useEffect, useState} from 'react'
import styles from './index.module.css'
const BtnBurger = ({isOpen, setIsOpen}) => {
	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className={styles['bars__menu']} onClick={handleClick}>
			<span
				className={`${styles['line1__bars-menu']} ${
					isOpen && styles['activeline1__bars-menu']
				}`}
			></span>
			<span
				className={`${styles['line2__bars-menu']} ${
					isOpen && styles['activeline2__bars-menu']
				}`}
			></span>
			<span
				className={`${styles['line3__bars-menu']} ${
					isOpen && styles['activeline3__bars-menu']
				}`}
			></span>
		</div>
	)
}

export default BtnBurger
