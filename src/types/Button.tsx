import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'blue' | 'yellow' | 'red';
    children: ReactNode;
}