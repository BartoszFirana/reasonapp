import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
    .add('Bright', () => <Card theme="bright" name="Sprouts - Brussel" price={88.19} />)
    .add('Dark', () => <Card theme="dark" name="Sprouts - Brussel" price={88.19} />);
