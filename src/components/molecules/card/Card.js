import React from 'react';
import styles from './Card.module.scss';
import Text from 'components/atoms/text/Text';
import CardBackground from 'components/atoms/cardBackground/CardBackground';
import Button from 'components/atoms/button/Button';

const Card = ({ theme = 'bright', name, price }) => {
    const currentTheme = () => {
        switch (theme) {
            case 'dark':
                return { background: 'rgb(120, 119, 212)' };
            default:
                return { background: 'white' };
        }
    };
    return (
        <>
            <article style={currentTheme()}>
                <CardBackground theme={theme} />
                <div className={styles.details}>
                    <Text theme={theme} type="h3" text={name} />
                    <Text theme={theme} type="paragraph" text={`Cena: $${price}`} />
                </div>
                <div className={styles.button}>
                    <Button theme={theme} text="do koszyka" />
                </div>
            </article>
        </>
    );
};

export default Card;
