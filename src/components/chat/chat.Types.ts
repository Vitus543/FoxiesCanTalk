export interface EmoteReplacement {
  stringToReplace: string;
  replacement: string;
}

interface Info {
  id: string;
  user: string;
}

export interface MessageInfo extends Info {
  text?: string;
}
