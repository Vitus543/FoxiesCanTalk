export interface EmoteReplacement {
	stringToReplace: string;
	replacement: string;
}

interface Info {
	id: string;
  user: string;
  colorUser: string;
}

export interface MessageInfo extends Info {
	text?: string;
}

export enum DontShowBots {
	InariMessage = '880730797',
}
