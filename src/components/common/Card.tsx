import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({
  children,
  className = "",
  hoverable = true,
}: CardProps) => {
  const hoverClasses = hoverable
    ? "hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
    : "";

  return (
    <div
      className={`p-3 rounded-2xl bg-white transition-all duration-200 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};
