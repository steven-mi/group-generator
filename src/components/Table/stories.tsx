import React from 'react';
import Table from '.';

export default {
  component: Table,
  title: 'Table',
};

export function Default() {
  return <Table entries={['Test', 'Test1', 'Test2']} />;
}
