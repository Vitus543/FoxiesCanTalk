import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactNode, useMemo } from 'react';
import { Helpers } from '../helper';

interface UserStyledBoxProps {
	user: string;
	colorUser: string;
	children: ReactNode;
}
export const UserStyledBox: FC<UserStyledBoxProps> = (props) => {
	const { children, colorUser, user } = props;
	const UserBoxStyled = useMemo(
		() =>
			styled(Box)(({ theme }) => ({
				fontWeight: theme.typography.fontWeightBold,
			})),
		[]
	);
	const UserInfoStyled = useMemo(
		() =>
			styled(Box)(({ theme }) => ({
				margin: theme.spacing(2, 1, 2, 0),
			})),
		[]
	);

	const badges = {
		'1': 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
		'2': 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
		'3': 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
		'6': 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
		'9': 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
		'12': 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
		artist: 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
		mod: 'https://static-cdn.jtvnw.net/badges/v1/7b321c2f-6d82-4d66-9864-47b33cf931ac/2',
	};
	const selectedTheme = Helpers.getSessionStorage('theme');

	return (
		<UserBoxStyled
			style={{
				color: colorUser,
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'row',
				gap: '10px',
			}}
			component="div"
		>
			{selectedTheme === 'D' && (
				<Box component="div">
					<img src={badges['1']} />
				</Box>
			)}
			<Box component="div">
				<UserInfoStyled component="p">{user}</UserInfoStyled>
			</Box>
			{children}
		</UserBoxStyled>
	);
};
