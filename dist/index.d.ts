import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    block?: boolean;
    className?: string;
    children: React.ReactNode;
}

declare const Button: React.FC<ButtonProps>;

export { Button };
