import React from 'react';
import { IHeader } from '../../types/Header';
import styles from './Header.module.scss'

const Header = ({ counter }: IHeader): JSX.Element => {
    return (
        <div className={styles.header}>
            List from <b>{counter}</b> task(s)
        </div>
    )

}

export default Header;
