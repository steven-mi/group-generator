import * as React from 'react';
import { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode
}

export default function Background({ children }: BackgroundProps) {
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
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
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
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
      </svg>
      {children}
    </div>

  );
}
