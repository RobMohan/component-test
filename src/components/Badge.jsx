import React from 'react';

const Badge = ({
  children,
  type = 'default',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-2.5 py-1 rounded text-xs font-normal';

  const types = {
    default: 'bg-blue-100 text-gray-700',
    warning: 'bg-yellow-400 text-black',
    positive: 'bg-green-600 text-white',
    negative: 'bg-red-600 text-white'
  };

  const badgeClasses = `${baseStyles} ${types[type]} ${className}`;

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default Badge;
