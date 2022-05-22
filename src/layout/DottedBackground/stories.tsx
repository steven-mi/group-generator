import React from 'react';
import {DottedBackground} from './index';

export default {
    component: DottedBackground,
    title: 'DottedBackground',
};

export const Default = () => {
    return <DottedBackground children={<p>content</p>}/>;
}
