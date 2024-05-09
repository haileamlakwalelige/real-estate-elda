// import React from 'react';

// Changed: Added types for props
interface ButtonProps {
    text: string;
    type: "button" | "submit" | "reset" | undefined; // Changed: Defined type prop as string or undefined
}

// Changed: Defined Button as a functional component with explicit types for props
const Button: React.FC<ButtonProps> = ({ text, type }) => {
    return (
      <button  type = { type } className = 'bg-footer px-8 py-2 rounded-2xl font-semibold text-primary text-center' >
        {text}
      </button>
  );
};

export default Button;
