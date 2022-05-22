import * as React from 'react';

interface GeneratorFormProps {
    default: string[]
}

export const GeneratorForm: React.FC<GeneratorFormProps> = (props: GeneratorFormProps) => {
    return (
        <>
            <p className="text font-bold text-gray-900 text-xl">
                Settings
            </p>
            <p className={"mt-4"}>Items:</p>
            <textarea
                rows={8}
                id="comment"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={props.default.join("\n")}
            />
            <p className={"mt-4"}>Groups:</p>
            <input type="number"
                   className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/6 sm:text-sm border-gray-300 rounded-md"
                   defaultValue={3}
            />

            <button type="button"
                    className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800">
                Generate subgroups
            </button>

        </>
    );
}
