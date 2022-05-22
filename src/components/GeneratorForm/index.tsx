import * as React from 'react';

interface GeneratorFormProps {
    default: string[]
    onClick: (subGroups: any) => void;
}


function chunkArray(arr: any[], chunkCount: number) {
    const chunks = [];
    while (arr.length) {
        const chunkSize = Math.ceil(arr.length / chunkCount--);
        const chunk = arr.slice(0, chunkSize);
        chunks.push(chunk);
        arr = arr.slice(chunkSize);
    }
    return chunks;
}

function shuffleArray(arr: any[]) {
    return arr.sort((a, b) => 0.5 - Math.random())
}

function generateSubGroups(groups: string[], numSubGroups: number) {
    const shuffledGroups = shuffleArray(groups);
    return chunkArray(shuffledGroups, numSubGroups)
}


export const GeneratorForm: React.FC<GeneratorFormProps> = (props: GeneratorFormProps) => {

    const [groups, setGroups] = React.useState(props.default);
    const [numGroups, setNumGroups] = React.useState(2)


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
                defaultValue={groups.join("\n")}
                onChange={event => setGroups(event.target.value.split("\n"))}
            />
            <p className={"mt-4"}>Groups:</p>
            <input type="number"
                   className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/6 sm:text-sm border-gray-300 rounded-md"
                   defaultValue={numGroups}
                   onChange={event => {
                       const eventNumber = parseInt(event.target.value)
                       if (eventNumber) {
                           setNumGroups(eventNumber)
                       }
                   }}
            />

            <button type="button"
                    onClick={() => {
                        if (groups) {
                            const subGroups = generateSubGroups(groups, numGroups)
                            props.onClick(subGroups)
                        }
                    }}
                    className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800">
                Generate groups
            </button>

        </>
    );
}
