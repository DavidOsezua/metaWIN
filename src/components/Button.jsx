import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button
      className={`text-[#fff] bg-[#FF6665] py-[0.3rem] px-[0.7rem] rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
