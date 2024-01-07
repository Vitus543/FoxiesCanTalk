import { FC, useMemo } from 'react';
import parse from 'html-react-parser';
import { MessageInfo } from '../chat.types';
import { GetAssets } from '../../../assets';
import { styledComponents } from '../../../styledComponents';
import { Helpers } from '../../../helper';

export const ChatList: FC<MessageInfo> = (props) => {
	const { text, user, colorUser, flags } = props;
	const { Box, UserBox, Message } = styledComponents;

	const icon = useMemo(() => {
		const selectedTheme = Helpers.getSessionStorage('theme');
		const assets = GetAssets(selectedTheme);
		if (flags.mod) {
			return assets?.icons?.mod;
		}
		if (flags.subscriber) {
			return assets?.icons?.subscriber;
		} else {
			return assets?.icons?.chatters;
		}
	}, [flags.subscriber, flags.mod]);

	return (
		<Box>
			<li>
				<div>
					<UserBox colorUser={colorUser} user={user}>
						{icon && (
							<div>
								<img src={icon} />
							</div>
						)}
					</UserBox>
					{text && <Message>{parse(text)}</Message>}
				</div>
			</li>
		</Box>
	);
};
