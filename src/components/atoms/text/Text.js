import React from 'react';
import styles from './Text.module.scss';

const Text = ({ type = 'paragraph', theme = 'bright', text }) => {
    const currentTheme = () => {
        switch (theme) {
            case 'dark':
                return { color: 'rgb(236, 236, 236)' };
            default:
                return { color: 'rgba(87, 86, 179, 1)' };
        }
    };
    return (
        <>
            {type === 'h1' && (
                <h1 className={styles.h1} style={currentTheme()}>
                    {text}
                </h1>
            )}
            {type === 'h3' && (
                <h3 className={styles.h3} style={currentTheme()}>
                    {text}
                </h3>
            )}
            {type === 'paragraph' && (
                <p className={styles.paragraph} style={currentTheme()}>
                    {text}
                </p>
            )}
        </>
    );
};

export default Text;
