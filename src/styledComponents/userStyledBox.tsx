import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactNode, useMemo } from 'react';

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

	return (
		<UserBoxStyled
			style={{
				color: colorUser,
				display: 'flex',
				alignItems: 'center',
			}}
			component="div"
		>
			<Box component="div">
				<UserInfoStyled component="p">{user}</UserInfoStyled>
			</Box>
			{children}
		</UserBoxStyled>
	);
};
