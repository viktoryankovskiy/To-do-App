import React from "react"

import cn from "classnames"


import { IButton } from "../../types/Button"

import styles from './Button.module.scss'

const Button = ({ appearance, children, className, onClick, ...props }: IButton): JSX.Element => {
    return (
        <button className={cn(styles.btn, className, {
            [styles.blue]: appearance === 'blue',
            [styles.red]: appearance === 'red',
            [styles.yellow]: appearance === 'yellow',
        })}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    )
}

export default Button;