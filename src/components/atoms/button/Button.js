import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ theme = 'bright', type = 'default', text, onClick, image, link }) => {
    const currentTheme = () => {
        switch (theme) {
            case 'dark':
                return { background: 'transparent', border: '2px solid white', color: 'white' };
            default:
                return {
                    background: 'transparent',
                    border: '2px solid rgb(102, 101, 202)',
                    color: 'rgb(102, 101, 202)',
                };
        }
    };
    return (
        <>
            {type === 'default' && (
                <button style={currentTheme()} className={styles.default} onClick={onClick}>
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
