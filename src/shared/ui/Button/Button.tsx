import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({className, children, ...props}: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button;
