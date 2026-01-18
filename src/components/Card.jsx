import React from 'react';

const Card = ({
  title,
  description,
  children,
  footer,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] ${className}`}>
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