'use client'

import React from "react";
import { IconType } from "react-icons";

interface Buttonprops {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}
const Button: React.FC<Buttonprops> = ({
  onClick,
  label,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full text-center capitalize 
      ${outline ? `bg-white ` : `bg-rose-500`} 
      ${outline ? `border-black ` : `bg-rose-500`} 
      ${outline ? `text-black ` : `text-white`} 
      ${small ? `py-1 ` : `py-3`}
      ${small ? `text-sm ` : `text-md`}
      ${small ? `font-light ` : `font-semibold`}
      ${small ? `border-[1px]` : `border-[2px]`}
      `}
    >
      {Icon && <Icon className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
