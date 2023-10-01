import { CSSProperties, FC, useMemo } from 'react';
import parse from 'html-react-parser';
import { MessageInfo } from '../chat.types';
import { Assets } from '../../../assets';

export const ChatList: FC<MessageInfo> = (props) => {
	const { text, user, colorUser, flags } = props;

	const cssHalloween: CSSProperties = {
		border: '10px solid transparent',
		borderRadius: '10px',
		padding: '15px',
		borderImage: `url(${Assets.image.borders.halloweenBorder}) 30 round`,
		backgroundColor: 'rgba(115, 73, 172, 0.6)', // https://www.schemecolor.com/wp-content/themes/colorsite/include/cc4.php?color0=512888&color1=7349ac&color2=eb6123&color3=da4200&pn=Halloween%20Purple%20and%20Orange
		margin: '15px 15px 15px 0px',
		textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
	};

	const messageHalloweenCss: CSSProperties = {
		//color: '#EB6123', //
		color: '#DA4200',
		fontWeight: 'bold',
		margin: '8px 0px',
	};

	const UserHalloweenCss: CSSProperties = {
		color: colorUser,
		fontWeight: 'bold',
		display: 'flex',
		alignItems: 'center',
	};

	const icon = useMemo(() => {
		if (flags.mod) {
			return Assets.icons.halloween.ghost;
		}
		if (flags.subscriber) {
			return Assets.icons.halloween.pumpkin;
		}
	}, [flags.subscriber, flags.mod]);

	return (
		<div style={cssHalloween}>
			<li>
				<div style={UserHalloweenCss}>
					<div>
						<p style={{ margin: '8px 0px' }}>{user}</p>
					</div>
					{icon && (
						<div style={{ marginLeft: '5px' }}>
							<img src={icon} />
						</div>
					)}
				</div>
				{text && (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<p style={messageHalloweenCss}>{parse(text)}</p>
					</div>
				)}
			</li>
		</div>
	);
};
