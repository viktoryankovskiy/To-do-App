
import React from "react";
import { IInput } from "../../types/Input";

import cn from "classnames";

import styles from './Input.module.scss'



const Input = ({ className, ...props }: IInput): JSX.Element => {
    return (
        <input className={cn(styles.input, className)} {...props} />
    )

}

export default Input;