import { FC } from 'react';
import parse from 'html-react-parser';
import { MessageInfo } from '../chat.Types';

export const ChatList: FC<MessageInfo> = (props) => {
	const { text, user, colorUser } = props;
	return (
		<>
			<li>
				<div style={{ color: colorUser }}>{user}</div>
				{text && (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<p>{parse(text)}</p>
					</div>
				)}
			</li>
		</>
	);
};
