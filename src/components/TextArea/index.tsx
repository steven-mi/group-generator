import * as React from 'react';

export default function Text() {
  return (
    <div className="mt-1">
      <textarea
        rows={4}
        name="comment"
        id="comment"
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
