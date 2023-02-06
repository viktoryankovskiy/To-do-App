import { MouseEventHandler, ReactNode } from "react";

export interface IHTag {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler | undefined;
}