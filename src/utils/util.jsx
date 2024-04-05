import clsx from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(){
    return twMerge(clsx())
}

export const API_URL = import.meta.env.VITE_API_URL