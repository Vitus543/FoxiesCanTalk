import { FC} from 'react';
import parse from 'html-react-parser';
import { BadgesPerMonths, MessageInfo } from '../chat.types';
import { GetAssets } from '../../../assets';
import { styledComponents } from '../../../styledComponents';
import { Helpers } from '../../../helper';

export const ChatList: FC<MessageInfo> = (props) => {
	const { text, user, colorUser, flags, badges, hasBadges } = props;
	const { Box, UserBox, Message } = styledComponents;
	let icons: JSX.Element | undefined;

	const selectedTheme = Helpers.getSessionStorage<string>('theme');
	if (selectedTheme === 'H' || selectedTheme === 'C') {
		icons = <img src={getAssetsPerTheme(selectedTheme)} />;
	} else {
		icons = hasBadges ? getBadgeOnDefaultTheme(selectedTheme ?? 'D') : undefined;
	}

	function getAssetsPerTheme(selectedTheme: string) {
		const assets = GetAssets(selectedTheme);
		if (flags.mod) {
			return assets?.icons?.mod;
		}
		if (flags.subscriber) {
			return assets?.icons?.subscriber;
		} else {
			return assets?.icons?.chatters;
		}
	}

	function getBadgeOnDefaultTheme(selectedTheme: string) {
		const showBadges: string[] = [];
		const assets = GetAssets(selectedTheme);
		Object.entries(badges).forEach(([badge, typeBadge]) => {
			console.log(badge, typeBadge);
			switch (badge) {
				case 'moderator': {
					showBadges.push(assets?.badges?.mod as string);
					break;
				}
				case 'artist-badge': {
					showBadges.push(assets?.badges?.artist as string);
					break;
				}
				case 'subscriber': {
					const typeSubscriber = getTypeSubscriber(typeBadge as string);
					showBadges.push(typeSubscriber);
					break;
				}
			}
		});

		return (
			<>
				{showBadges.map((badge, index) => {
					return <img key={`badge_${index}_img`} src={badge} />;
				})}
			</>
		);
	}

	function getTypeSubscriber(typeBadge: string) {
		let selectedBadge: BadgesPerMonths;
		switch (typeBadge) {
			case '2':
				selectedBadge = BadgesPerMonths.Badges2;
				break;
			case '3':
				selectedBadge = BadgesPerMonths.Badges3;
				break;
			case '6':
				selectedBadge = BadgesPerMonths.Badges6;
				break;
			case '9':
				selectedBadge = BadgesPerMonths.Badges9;
				break;
			case '12':
				selectedBadge = BadgesPerMonths.Badges12;
				break;
			case '1':
			case '0':
			default:
				selectedBadge = BadgesPerMonths.Badge1;
				break;
		}
		return getBadgeURL(selectedBadge);
	}

	function getBadgeURL(badge: BadgesPerMonths) {
		return `https://static-cdn.jtvnw.net/badges/v1/${badge}/2`;
	}

	return (
		<Box>
			<li>
				<div>
					<UserBox colorUser={colorUser} user={user}>
						{icons && <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>{icons}</div>}
					</UserBox>
					{text && <Message>{parse(text)}</Message>}
				</div>
			</li>
		</Box>
	);
};
