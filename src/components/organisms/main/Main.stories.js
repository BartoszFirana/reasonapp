import React from 'react';
import { storiesOf } from '@storybook/react';
import Main from './Main';
import Text from 'components/atoms/text/Text';

storiesOf('Main', module)
    .add('Bright', () => (
        <Main>
            <Text text="main" />
        </Main>
    ))
    .add('Dark', () => (
        <Main theme="dark">
            <Text theme="dark" text="main dark" />
        </Main>
    ));
