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
      <div className="flex border-b border-black">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`
              px-2 py-2 text-base font-normal text-center transition-all duration-200
              border-b-[3px] border-solid relative
              ${
                activeTab === index
                  ? 'text-blue-500 border-blue-500'
                  : 'text-gray-900 border-transparent hover:bg-blue-100 hover:rounded-t'
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
