import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Años de experiencia de VAROSA, calculados automáticamente cada año.
export const ANIO_FUNDACION = 2007;
export const aniosExperiencia = () => new Date().getFullYear() - ANIO_FUNDACION;
