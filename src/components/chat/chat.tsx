import { FC } from 'react';
import { useChatHelper } from './chat.helper';
import { ChatList } from './blocks/chatList';
import { MessageInfo } from './chat.types';
import './styles/animation.css';
import './styles/chatStyle.css';
import { useGetUrlParams } from '../../hooks';

export const Chat: FC = () => {
	const chatDataArray = useChatHelper();
	const { getUrlChatMode } = useGetUrlParams();
	let id = '';

	if (getUrlChatMode()?.toLocaleLowerCase() === 'G'.toLocaleLowerCase()) {
		id = 'list-reversed';
	}
	return (
		<div id="chat">
			<ul id={id}>
				{chatDataArray.map((chat: MessageInfo) => {
					return <ChatList key={chat.id} {...chat} />;
				})}
			</ul>
		</div>
	);
};
