import * as React from 'react';
import {DottedBackground} from '../../layout/DottedBackground';
import {TextHeader} from '../../components/TextHeader';
import {generateSubGroups, GeneratorForm} from '../../components/GeneratorForm';
import {Table} from '../../components/Table';
import {UsageInstruction} from '../../components/UsageInstruction';

export function HomePage() {

    const defaultGroups = ["Steven", "Felix", "Johannes", "Anna", "Jonas", "Steve"]
    const defaultNumber = 2
    const [groups, setGroups] = React.useState(generateSubGroups(defaultGroups, defaultNumber));

    return (
        <div className="pt-4 px-4 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <TextHeader/>
                <DottedBackground>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                        <div className="text-gray-500">
                            <GeneratorForm defaultItems={defaultGroups} onClick={setGroups}
                                           defaultNumber={defaultNumber}/>
                        </div>
                        <div className="sm:invisible prose prose-indigo prose-lg text-gray-500">
                            <UsageInstruction/>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <p className="font-bold text-gray-900 text-xl">
                            Generated {groups.length} groups
                        </p>
                        <div className="lg:grid lg:grid-cols-2">
                            {
                                groups.map((group, index) =>
                                    <Table entries={group} title={`${index + 1}. Group`}/>
                                )
                            }
                        </div>
                    </div>
                </DottedBackground>
            </div>
        </div>
    );
}
