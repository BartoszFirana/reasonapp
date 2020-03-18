import React from 'react';
import styles from './Main.module.scss';

const Main = ({ children, theme = 'bright' }) => {
    const currentTheme = () => {
        switch (theme) {
            case 'dark':
                return { background: 'rgb(102, 101, 202)' };
            default:
                return { background: 'white' };
        }
    };
    return (
        <>
            <main style={currentTheme()} className={styles.main}>
                {children}
            </main>
        </>
    );
};

export default Main;
