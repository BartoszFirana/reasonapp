import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';

storiesOf('Logo', module)
    .add('Bright', () => <Logo />)
    .add('Dark', () => <Logo theme="dark" />);
