import React, { useState } from 'react';

const Tabs = ({
  tabs = [],
  defaultTab = 0,
  onChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className={className}>
      <div className="flex flex-col border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`
              px-4 py-3 text-base font-normal text-center transition-all duration-200
              border-b-2 hover:text-gray-900
              ${
                activeTab === index
                  ? 'text-blue-500 border-blue-500'
                  : 'text-gray-900 border-transparent hover:border-gray-300'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs[activeTab]?.content && (
        <div className="mt-4">
          {tabs[activeTab].content}
        </div>
      )}
    </div>
  );
};

export default Tabs;
