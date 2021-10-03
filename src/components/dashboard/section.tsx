import Link from 'next/link';
import React from 'react';

const Section = ({ title, description, right = null, children, button = '', buttonURL = '' }) => {
  return (
    <div className="w-full p-4 rounded-lg bg-white  dark:bg-gray-900 dark:border-gray-800">
      <div className="flex flex-row items-center justify-between mb-6">

        <div className="flex flex-col">
          <div className="text-sm font-light text-gray-500">{title}</div>
          <div className="text-sm font-bold">{description}</div>
        </div>
        {button && (
          <button
            style={{ float: 'right' }}
            className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
          >
            <Link href={buttonURL}>{button}</Link>
          </button>
        )}
        {right}

      </div>
      {children}
    </div>
  )
}

export default Section
