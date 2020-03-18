import React from 'react';
import styles from './Header.module.scss';
import Logo from 'components/atoms/logo/Logo';
import Button from 'components/atoms/button/Button';
import ShopIcon from 'assets/images/shop.svg';

const Header = ({ theme = 'bright' }) => {
    const currentTheme = () => {
        switch (theme) {
            case 'dark':
                return styles.header__dark;
            default:
                return styles.header__bright;
        }
    };

    return (
        <>
            <header className={currentTheme()}>
                <Logo theme={theme === 'dark' ? 'dark' : 'bright'} />
                <Button type="icon" image={ShopIcon} text="Twój koszyk" />
            </header>
        </>
    );
};

export default Header;
