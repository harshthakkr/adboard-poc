export const CurrentView = {
  CHAT: "chat",
  VIDEO_CALL: "video call",
  GROUP_VIDEO_CALL: "group video call",
  NEW_CHAT: "new chat",
} as const;

export type CurrentViewType = (typeof CurrentView)[keyof typeof CurrentView];
