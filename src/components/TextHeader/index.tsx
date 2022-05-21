import * as React from 'react';

export default function TextHeader() {
  return (
    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
      <div className="text-base max-w-prose lg:max-w-none">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Group Generator
        </p>
        <p className="mt-4 text-lg text-blue-800">
          Divide your group into random subgroups
        </p>
      </div>
    </div>
  );
}
