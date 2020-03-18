import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('Text', module)
    .add('Bright Paragraph', () => <Text text="Bright" />)
    .add('Dark Paragraph', () => <Text theme="dark" text="Dark" />)
    .add('Bright h1', () => <Text type="h1" text="Bright H1" />)
    .add('Dark h1', () => <Text type="h1" theme="dark" text="Dark H1" />)
    .add('Bright h3', () => <Text type="h3" text="Bright H3" />)
    .add('Dark h3', () => <Text type="h3" theme="dark" text="Dark H3" />);
