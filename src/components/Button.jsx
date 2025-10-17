import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white focus:ring-purple-400 disabled:bg-primary-disabled',
    secondary: 'bg-secondary hover:bg-secondary-hover text-black focus:ring-lime-400 disabled:bg-secondary-disabled',
    destructive: 'bg-destructive hover:bg-destructive-hover text-white focus:ring-red-400 disabled:bg-destructive-disabled',
    outline: 'bg-white border-2 border-gray-300 hover:bg-gray-50 text-black focus:ring-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
    ghost: 'bg-transparent hover:bg-gray-100 text-black focus:ring-gray-300 disabled:text-gray-400',
    link: 'bg-transparent hover:underline text-primary focus:ring-purple-300 disabled:text-primary-disabled'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-5 py-2.5 text-base',
    large: 'px-6 py-3 text-lg',
    icon: 'p-2.5'
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const iconSize = size === 'small' ? 16 : size === 'large' ? 22 : 18;
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
    </button>
  );
};

export default Button;