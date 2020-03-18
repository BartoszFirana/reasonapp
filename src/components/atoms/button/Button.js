import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ type = 'default', text, onClick, image, link }) => {
    return (
        <>
            {type === 'default' && (
                <button className={styles.default} onClick={onClick}>
                    {text}
                </button>
            )}
            {type === 'icon' && (
                <button className={styles.image}>
                    <img className={styles.image__icon} src={image} alt={text} />
                </button>
            )}
            {type === 'link' && (
                <Link className={styles.link} to={link}>
                    {text}
                </Link>
            )}
        </>
    );
};

export default Button;
