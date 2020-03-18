import React from 'react';
import styles from './CardBackground.module.scss';

const CardBackground = ({ theme = 'bright' }) => {
    const currentTheme = () => {
        switch (theme) {
            case 'dark':
                return { background: 'rgb(102, 101, 202)' };
            default:
                return { background: 'rgb(239, 239, 239)' };
        }
    };
    return (
        <>
            <div style={currentTheme()} className={styles.background}></div>
        </>
    );
};

export default CardBackground;
