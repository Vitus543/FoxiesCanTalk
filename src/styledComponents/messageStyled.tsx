import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactNode, useMemo } from 'react';

export const MessageStyled: FC<{ children: ReactNode }> = ({ children }) => {
	const MessageStyled = useMemo(
		() =>
			styled(Box)(({ theme }) => ({
				fontWeight: theme.typography.fontWeightBold,
				margin: theme.spacing(2, 0),
				color: theme.palette.text.primary,
			})),
		[]
	);

	return (
		<Box
			component="div"
			style={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<MessageStyled
				component="div"
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: '8px',
					flexWrap: 'wrap',
				}}
			>
				{children}
			</MessageStyled>
		</Box>
	);
};
