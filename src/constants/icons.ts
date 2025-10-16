// Icon paths
export const ICONS = {
  // Navigation
  LOGO: "/logo.svg",
  DASHBOARD: "/SquaresFour.svg",
  INSIGHTS: "/MagicWand.svg",
  TRANSCRIPT: "/Notebook.svg",
  CHAT: "/ChatCircle.svg",
  CHAT_CIRCLE_2: "/ChatCircle-2.svg",

  // User
  AVATAR: "/Avatar.png",
  USER: "/User.svg",
  USERS: "/Users.svg",

  // Actions
  NOTE_PENCIL: "/NotePencil.svg",
  COPY: "/Copy.svg",
  MAGIC_STICK: "/MagicStick4.svg",
  ARROWS_CLOCKWISE: "/ArrowsClockwise.svg",
  ARROW_UP: "/ArrowUp.svg",
  ICON_BUTTON: "/IconButton.svg",

  // Communication
  PHONE: "/Phone.svg",
  PHONE_2: "/Phone-2.svg",
  VIDEO_CAMERA: "/VideoCamera.svg",
  MICROPHONE: "/Microphone.svg",
  SPEAKER_HIGH: "/SpeakerHigh.svg",

  // Feedback
  THUMBS_UP: "/ThumbsUp.svg",
  THUMBS_DOWN: "/ThumbsDown.svg",

  // Media
  QUOTES: "/Quotes.svg",
  WAVEFORM: "/Waveform.svg",

  // Social Media
  TWITTER: "/Twitter.svg",
  REDDIT: "/Reddit.svg",

  // UI
  X: "/x.svg",
  X_2: "/X-2.svg",
  X_3: "/X-3.svg",

  // Video Call
  VIDEO_CALL_PERSON_1: "/VideoCallPerson-1.jpg",
  VIDEO_CALL_PERSON_2: "/VideoCallPerson-2.jpg",
  VIDEO_CALL_PERSON_3: "/VideoCallPerson-3.png",

  // Backgrounds
  BUTTON_BACKGROUND: "/ButtonImageBackground.png",
} as const;

export type IconKey = keyof typeof ICONS;
