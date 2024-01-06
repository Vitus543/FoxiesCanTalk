import { FC, useMemo } from 'react';
import parse from 'html-react-parser';
import { MessageInfo } from '../chat.types';
import { Assets } from '../../../assets';
import { styledComponents } from '../../../styledComponents';

export const ChatList: FC<MessageInfo> = (props) => {
	const { text, user, colorUser, flags } = props;
	const { Box, UserBox, Message } = styledComponents;

	const icon = useMemo(() => {
		if (flags.mod) {
			// return Assets.icons.halloween.ghost;
			return Assets.icons.christmas.christmasTree;
		}
		if (flags.subscriber) {
			// return Assets.icons.halloween.pumpkin;
			return Assets.icons.christmas.gingerBreadMan;
		} else {
			return Assets.icons.christmas.greenPresent;
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
