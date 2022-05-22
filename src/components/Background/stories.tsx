import React from 'react';
import {Background} from '.';

export default {
    component: Background,
    title: 'Background',
};

export const Default = () => {
    return <Background children={<p>content</p>}/>;
}
