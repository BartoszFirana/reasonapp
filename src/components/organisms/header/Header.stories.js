import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Header', module)
    .add('Bright', () => <Header theme="bright" />)
    .add('Dark', () => <Header theme="dark" />);
