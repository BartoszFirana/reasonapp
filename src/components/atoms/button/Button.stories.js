import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Button from './Button';
import ShopIcon from 'assets/images/shop.svg';

storiesOf('Button', module)
    .addDecorator(StoryRouter())
    .add('Default', () => <Button text="Default button" />)
    .add('Icon', () => <Button type="icon" text="Ikona" image={ShopIcon} />)
    .add('Link', () => <Button type="link" text="Link" link="/" />);
