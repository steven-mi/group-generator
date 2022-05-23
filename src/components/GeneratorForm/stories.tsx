import React from 'react';
import {GeneratorForm} from ".";

export default {
    component: GeneratorForm,
    title: 'GeneratorForm',
};

export const Default = () => {
    return <GeneratorForm
        defaultItems={["Steven", "Felix", "Johannes", "Anna", "Jonas", "Steve", "Florian", "Marc", "Nico", "Ron"]}
        defaultNumber={2}
        onClick={() => (console.log("hi"))}/>;
}
