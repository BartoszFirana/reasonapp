import React from 'react';
import styles from './Footer.module.scss';
import Text from 'components/atoms/text/Text';

const Footer = ({ theme = 'bright' }) => {
    const currentTheme = () => {
        switch (theme) {
            case 'dark':
                return styles.footer__dark;
            default:
                return styles.footer__bright;
        }
    };
    return (
        <>
            <footer className={currentTheme()}>
                <Text text="SimpleStore by Bartosz Buczkowski" />
            </footer>
        </>
    );
};

export default Footer;
