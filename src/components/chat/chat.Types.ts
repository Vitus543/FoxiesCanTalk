import { OnMessageFlags } from 'comfy.js';

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
	flags: OnMessageFlags;
}

export enum NoBots {
	InariMessage = '880730797',
	StreamElements = '100135110',
	LumiaStream = '605116711',
	KofiStreamBot = '431199284',
	SonglistBot = '156463545',
}
