import React from 'react';
import { Check } from 'lucide-react';

const Checkbox = ({
  checked = false,
  disabled = false,
  label = '',
  onChange,
  className = '',
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />
        <label
          htmlFor={checkboxId}
          className={`
            flex items-center justify-center w-7 h-7 rounded border cursor-pointer
            transition-all duration-200
            ${
              disabled
                ? 'bg-gray-300 border-gray-300 cursor-not-allowed'
                : checked
                ? 'bg-blue-500 border-blue-500'
                : 'bg-white border-gray-600 hover:border-blue-500'
            }
          `}
        >
          {checked && (
            <Check
              size={14}
              className={disabled ? 'text-gray-400' : 'text-white'}
              strokeWidth={3}
            />
          )}
        </label>
      </div>
      {label && (
        <label
          htmlFor={checkboxId}
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

export default Checkbox;
