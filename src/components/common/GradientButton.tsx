import type { ReactNode } from "react";
import backgroundImage from "/ButtonImageBackground.png";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export const GradientButton = ({
  children,
  onClick,
  type = "button",
  className = "",
}: GradientButtonProps) => {
  return (
    <div
      className={`p-[1px] rounded-full hover:scale-105 active:scale-95 transition-transform duration-200 ${className}`}
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary-blue-dark), var(--color-primary-blue-light))",
      }}
    >
      <button
        type={type}
        onClick={onClick}
        className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer"
        style={{
          backgroundImage: `url(${backgroundImage}), linear-gradient(to bottom, var(--color-primary-blue-dark), var(--color-primary-blue-mid))`,
          backgroundBlendMode: "normal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </button>
    </div>
  );
};
