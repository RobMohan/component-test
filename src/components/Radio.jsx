import React from 'react';

const Radio = ({
  checked = false,
  disabled = false,
  label = '',
  onChange,
  className = '',
  id,
  name,
  value,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative inline-flex items-center">
        <input
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />
        <label
          htmlFor={radioId}
          className={`
            flex items-center justify-center w-7 h-7 rounded-full border
            transition-all duration-200 cursor-pointer relative
            ${
              disabled
                ? 'bg-gray-300 border-gray-300 cursor-not-allowed'
                : checked
                ? 'bg-white border-2 border-blue-500'
                : 'bg-white border border-gray-600 hover:border-blue-500'
            }
          `}
        >
          {checked && !disabled && (
            <div className="absolute w-[18px] h-[18px] rounded-full bg-blue-500" />
          )}
        </label>
      </div>
      {label && (
        <label
          htmlFor={radioId}
          className={`
            text-base leading-6
            ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900 cursor-pointer'}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
