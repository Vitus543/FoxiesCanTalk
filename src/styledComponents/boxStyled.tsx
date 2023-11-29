import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactNode, useMemo } from 'react';
import { Assets } from '../assets';

export const BoxStyled: FC<{ children: ReactNode }> = ({ children }) => {
	const borderImage = Assets.image.borders.christmasBorderAlter;
	const BoxStyled = useMemo(
		() =>
			styled(Box)(({ theme }) => ({
				borderRadius: theme.shape.borderRadius,
				border: `${theme.spacing(4)} solid transparent`,
				padding: theme.spacing(4),
				backgroundColor: theme.palette.background.paper, //'background.default', // https://www.schemecolor.com/wp-content/themes/colorsite/include/cc4.php?color0=512888&color1=7349ac&color2=eb6123&color3=da4200&pn=Halloween%20Purple%20and%20Orange
				margin: theme.spacing(4, 4, 4, 0),
				textShadow: theme.shadows[1],
			})),
		[]
	);

	return (
		<BoxStyled
			component="div"
			style={{
				borderImage: `url(${borderImage}) 30 round`,
			}}
		>
			{children}
		</BoxStyled>
	);
};
