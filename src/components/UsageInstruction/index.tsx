import * as React from 'react';

export const UsageInstruction: React.FC = () => {
    return (
        <>
            <p className="text font-bold text-gray-900">
                How to use the generator
            </p>
            <p>
                Enter each item in a new row, select the number of groups and click the button
                to create your randomized group list. If you do not like the first team, then
                click again until you like it.
            </p>
            <p>
                Choose teams fairly and without bias. You do not have to pick names out of a hat.
                You do not have to make a list like you did in elementary school or spend hours
                thinking about the most balanced teams. The fairest division method possible
                is random.
            </p>
        </>
    );
}
