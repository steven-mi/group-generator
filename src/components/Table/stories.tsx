import React from 'react';
import {Table} from '.';

export default {
    component: Table,
    title: 'Table',
};

export const Default = () => {
    return <Table entries={['Test', 'Test1', 'Test2']} title={"Test"}/>;
}
