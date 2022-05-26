import * as React from 'react';
import {ReactNode} from 'react';

interface DottedBackgroundProps {
    children: ReactNode
}

export const DottedBackground: React.FC<DottedBackgroundProps> = (props) => {

    const social = [
        {
            name: 'Twitter',
            href: 'https://twitter.com/pqbsbk',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/steven-mi',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/steven-mi/',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            ),
        },
    ]

    return (
        <div className="relative">
            <svg
                className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                    </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"/>
            </svg>
            <svg
                className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                    </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"/>
            </svg>
            <div className="relative md:bg-white md:p-6 rounded-lg">
                {props.children}
            </div>
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <div className="mt-8 flex justify-end space-x-6">
                        <p className="text-base text-gray-500">
                            &copy; 2022 steven-mi, Inc. All rights reserved.
                        </p>
                        {social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>

    );
}
