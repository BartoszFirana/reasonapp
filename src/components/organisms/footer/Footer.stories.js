import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

storiesOf('Footer', module)
    .add('Bright', () => <Footer />)
    .add('Dark', () => <Footer theme="dark" />);
