// Common CSS class utilities for consistent styling

export const ANIMATION_CLASSES = {
  // Interactive elements
  INTERACTIVE:
    "cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200",
  CARD_HOVER:
    "hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200",
  BUTTON_PRESS: "active:scale-95 transition-all duration-200",
  SUBTLE_HOVER: "hover:scale-105 transition-transform duration-200",
  ROTATE_ON_HOVER: "hover:rotate-90 transition-all duration-200",
} as const;

export const LAYOUT_CLASSES = {
  FLEX_CENTER: "flex justify-center items-center",
  FLEX_BETWEEN: "flex justify-between items-center",
  FLEX_START: "flex items-start",
  FLEX_COL: "flex flex-col",
} as const;

export const BORDER_CLASSES = {
  LIGHT: "border border-border-light",
  ROUNDED_FULL: "rounded-full",
  ROUNDED_LG: "rounded-lg",
  ROUNDED_XL: "rounded-xl",
  ROUNDED_2XL: "rounded-2xl",
} as const;

/**
 * Combines class names, filtering out falsy values
 * @param classes - Array of class names or conditional class names
 * @returns Combined class string
 */
export const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Formats a list of names for display
 * @param names - Array of names
 * @returns Formatted string of names
 */
export const formatNames = (names: string[]): string => {
  if (names.length === 1) return names[0];
  return names.join(", ");
};

/**
 * Truncates text to a specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
