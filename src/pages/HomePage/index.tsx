import * as React from 'react';
import {DottedBackground} from '../../layout/DottedBackground';
import {TextHeader} from '../../components/TextHeader';
import {GeneratorForm} from '../../components/GeneratorForm';
import {Table} from '../../components/Table';
import {UsageInstruction} from '../../components/UsageInstruction';

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

function generateSubGroups(groups: string[], numSubGroups: number) {
    const randomSeed = 42
    const shuffledGroups = groups.sort((a, b) => randomSeed - Math.random());
    return chunkArray(shuffledGroups, numSubGroups)
}

export function HomePage() {

    const defaultGroups = ["Steven", "Felix", "Johannes", "Anna", "Jonas", "Steve", "Florian", "Marc", "Nico", "Ron"]
    const subGroups = generateSubGroups(defaultGroups, 2)
    const [groups, setGroups] = React.useState([]);

    return (
        <div className="pt-4 px-4 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <TextHeader/>
                <DottedBackground>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                        <div className="text-gray-500">
                            <GeneratorForm default={defaultGroups}/>
                        </div>
                        <div className="prose prose-indigo prose-lg text-gray-500">
                            <UsageInstruction/>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <p className="text font-bold text-gray-900">
                            Generated Groups
                        </p>
                        <div className="lg:grid lg:grid-cols-2">
                            {
                                subGroups.map(group =>
                                    <Table entries={group}/>
                                )
                            }
                        </div>
                    </div>
                </DottedBackground>
            </div>
        </div>
    );
}
