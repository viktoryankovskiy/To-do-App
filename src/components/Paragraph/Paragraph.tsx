import cn from "classnames"
import React from "react"

import { IParagraph } from "../../types/Paragraph"

import styles from './Paragraph.module.scss'

const Paragraph = ({ size, children, className }: IParagraph): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.lg]: size === 'lg',
            [styles.md]: size === 'md',
            [styles.sm]: size === 'sm',
        })}>
            {children}
        </p>
    )
}

export default Paragraph