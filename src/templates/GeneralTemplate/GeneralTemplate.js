import React from 'react';
import styles from './GeneralTemplate.module.scss';

const GeneralTemplate = ({ children }) => {
    return (
        <>
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default GeneralTemplate;
