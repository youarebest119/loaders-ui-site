import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    fluid?: boolean,
    loading?: boolean,
    text?: string,
}