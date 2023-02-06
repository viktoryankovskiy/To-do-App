import cn from "classnames";
import React from "react"

import { IHTag } from "../../types/HTag"

import styles from './HTag.module.scss'

const HTag = ({ tag, children, className, onClick }: IHTag): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={cn(styles.h1, className)} onClick={onClick}>{children}</h1>;
        case 'h2':
            return <h2 className={cn(styles.h2, className)} onClick={onClick}>{children}</h2>;
        case 'h3':
            return <h3 className={cn(styles.h3, className)} onClick={onClick}>{children}</h3>;
        default:
            return <></>
    }
}

export default HTag