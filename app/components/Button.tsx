"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.30)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
  };

  const sizeClasses = {
    sm: "px-5 py-2 text-sm rounded-full",
    md: "px-6 py-3 text-base rounded-2xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    font-semibold
    transition-all
    duration-300
    hover:scale-[1.02]
    active:scale-[0.98]
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  const content = (
    <>
      {leftIcon && (
        <span className="flex items-center">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex items-center">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}