import React from 'react';
import styles from './Logo.module.scss';

const Logo = ({ theme = 'bright' }) => {
    return (
        <>
            {theme === 'bright' && <h2 className={styles.logo__dark}>storeLogo</h2>}
            {theme === 'dark' && <h2 className={styles.logo__bright}>storeLogo</h2>}
        </>
    );
};

export default Logo;
