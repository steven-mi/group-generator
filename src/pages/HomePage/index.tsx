import * as React from 'react';
import {Background} from '../../components/Background';
import {TextHeader} from '../../components/TextHeader';
import {TextArea} from '../../components/TextArea';
import {Table} from '../../components/Table';
import {UsageInstruction} from '../../components/UsageInstruction';

export function HomePage() {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <TextHeader/>
                <Background>
                    <div className="relative md:bg-white md:p-6">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                                <TextArea/>
                            </div>
                            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                                <UsageInstruction/>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <p className="text font-bold text-gray-900">
                                Generated Groups
                            </p>
                            <div className="lg:grid lg:grid-cols-2">
                                <Table entries={['Test', 'Hi', 'Opfer']}/>
                                <Table entries={['Test', 'Hi', 'Opfer']}/>
                            </div>
                        </div>
                    </div>
                </Background>
            </div>
        </div>
    );
}
