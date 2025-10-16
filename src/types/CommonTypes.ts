/**
 * Common component props interfaces
 */

export interface BaseComponentProps {
  className?: string;
}

export interface ClickableProps {
  onClick?: () => void;
}

export interface InteractiveElementProps
  extends BaseComponentProps,
    ClickableProps {
  disabled?: boolean;
  ariaLabel?: string;
}

export interface IconProps {
  icon: string;
  alt: string;
}

export interface SizeVariant {
  size?: "small" | "medium" | "large";
}

export interface ColorVariant {
  variant?: "default" | "primary" | "danger" | "success";
}

/**
 * Chat related types
 */
export interface ChatMessage {
  id: string;
  senderId: number;
  content: string;
  timestamp: Date;
  type: "text" | "file" | "image";
}

export interface FileAttachment {
  file: File;
  previewUrl?: string;
  type: "image" | "document" | "other";
}

/**
 * Video call types
 */
export interface VideoParticipant {
  id: number;
  name: string;
  image: string;
  isSpeaking?: boolean;
  isMuted?: boolean;
  isVideoOff?: boolean;
}
