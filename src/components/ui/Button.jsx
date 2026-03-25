import React from 'react';

const sizeClasses = {
  normal: 'px-6 py-3 text-sm',
  large: 'px-12 py-4 text-base',
};

const variantClasses = {
  primary:
    'bg-[#8B1A2B] text-white hover:bg-[#6E1522] border border-transparent',
  outline:
    'bg-transparent border border-gray-300 text-gray-900 hover:bg-[#8B1A2B] hover:text-white hover:border-[#8B1A2B]',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'normal',
  href,
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 cursor-pointer';
  const classes = `${base} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.normal} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
