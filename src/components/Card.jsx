import React from 'react';

const Card = ({ 
  title, 
  description, 
  children, 
  footer,
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      )}
      
      {description && (
        <p className="text-gray-500 text-base mb-4">{description}</p>
      )}
      
      {children && (
        <div className="text-gray-900">{children}</div>
      )}
      
      {footer && (
        <div className="mt-6">{footer}</div>
      )}
    </div>
  );
};

export default Card;