import ComfyJS, { OnMessageExtra } from 'comfy.js';
import { useState } from 'react';
import { DontShowBots, EmoteReplacement, MessageInfo } from './chat.Types';

export const useChatHelper = (): MessageInfo[] => {
	const [chatDataArray, setChatDataArray] = useState<MessageInfo[]>([]);

	ComfyJS.onChat = (user, message, _flags, _self, extra) => {
		console.log(extra);
		if (extra.userId !== DontShowBots.InariMessage) {
			setChatDataArray((oldData) => [
				...oldData,
				{
					id: extra.id,
          user,
          colorUser:extra.userColor,
					text: getMessageHTML(message, extra),
				},
			]);
		}
	};

	const getMessageHTML = (message: string, extra: OnMessageExtra) => {
		if (!extra.messageEmotes) return message;
		// store all emote keywords
		// ! you have to first scan through
		// the message string and replace later
		const stringReplacements: EmoteReplacement[] = [];
		const emote = extra.messageEmotes;
		// iterate of emotes to access ids and positions
		Object.entries(emote).forEach(([id, positions]) => {
			//   // use only the first position to find out the emote key word
			const position = positions[0];
			const [start, end] = position.split('-');
			const stringToReplace = message.substring(parseInt(start, 10), parseInt(end, 10) + 1);

			let sizeOfEmote = '1.0';
			if (extra.isEmoteOnly) {
				sizeOfEmote = '2.0';
			}
			stringReplacements.push({
				stringToReplace: stringToReplace,
				replacement: `<img src="https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/dark/${sizeOfEmote}">`,
			});
		});

		// generate HTML and replace all emote keywords with image elements

		const messageHTML = stringReplacements.reduce((acc, { stringToReplace, replacement }) => {
			// obs browser doesn't seam to know about replaceAll
			return acc.split(stringToReplace).join(replacement);
		}, message);

		return messageHTML;
	};

	return chatDataArray;
};
