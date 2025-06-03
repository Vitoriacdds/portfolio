
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm border border-slate-200",
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
