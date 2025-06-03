
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-white to-pastel-blue">
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
