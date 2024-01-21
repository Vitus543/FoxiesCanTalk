import { FC, useEffect } from 'react';
import { useChatHelper } from './chat.helper';
import { ChatList } from './blocks/chatList';
import { MessageInfo } from './chat.types';
import './styles/animation.css';
import './styles/chatStyle.css';
import { useGetUrlParams } from '../../hooks';

export const Chat: FC = () => {
	const chatDataArray = useChatHelper();

	//TODO
	// useEffect(() => {
	//   debugger;
	// 	if (getUrlChatMode()?.toLocaleLowerCase() === 'G'.toLocaleLowerCase()) {
	// 		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	// 	}
	// }, [JSON.stringify(chatDataArray)]);

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
