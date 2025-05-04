import React, { forwardRef } from 'react';

const Button = forwardRef(({ children = "Submit", type, className, ...props }, ref) => {
  return (
    <div>
      <button 
        ref={ref} 
        type={type} 
        className={` m-2 border rounded-3xl font-semibold text-center px-3 text-[15px]  text-white py-[2px] ${className}`} 
        {...props}
      >
        {children}
      </button>
    </div>
  );
});

export default Button;
