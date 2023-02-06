import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface IParagraph extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'lg' | 'md' | 'sm';
    children: ReactNode;
}