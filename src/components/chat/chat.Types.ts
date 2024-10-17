import { Badges, OnMessageFlags } from 'comfy.js';

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
	badges: Badges;
	hasBadges: boolean;
}

export enum NoBots {
	InariMessage = '880730797',
	StreamElements = '100135110',
	LumiaStream = '605116711',
	KofiStreamBot = '431199284',
	SonglistBot = '156463545',
	SeryBot = '402337290',
	PrimsLiveStudio = '198471448',
}

export enum BadgesPerMonths {
	Badge1 = '34a4da96-8083-4a8d-9743-0c71f3c505df',
	Badges2 = '48a8b0cf-81c0-44f3-8566-e55d2a293717',
	Badges3 = '1de41a03-f2e6-4368-863b-a5d17a15f42a',
	Badges6 = '296feb86-2d87-4a86-841f-2da32577a008',
	Badges9 = '2c8d869e-11f3-4fd1-b594-24300a5e7b9f',
	Badges12 = '01df0da4-eb23-4630-ad3c-2ce8fd4d209d',
}
