import React from 'react';
import Background from '.';

export default {
  component: Background,
  title: 'Background',
};

export function Default() {
  return <Background children={<p>content</p>} />;
}
