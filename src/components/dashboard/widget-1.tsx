import React from 'react';

const Widget1 = ({ title, description, left }) => {
  return (
    <div className="widget w-full p-4 rounded-lg bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="flex flex-row items-center ">
        {left}
        <div className="flex flex-col p-4">

          <div className="text-xs uppercase font-light text-gray-500">
            {title}
          </div>
          <div className="text-xl font-bold">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Widget1;
