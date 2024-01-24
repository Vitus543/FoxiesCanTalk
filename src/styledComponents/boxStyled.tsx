import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactNode, useMemo } from 'react';
import { GetAssets } from '../assets';
import { Helpers } from '../helper';
import { useGetUrlParams } from '../hooks';

export const BoxStyled: FC<{ children: ReactNode }> = ({ children }) => {
	const selectedTheme = Helpers.getSessionStorage('theme');
	const { getUrlChatMode } = useGetUrlParams();
	const assets = GetAssets(selectedTheme);

	let styles = undefined;
	if (assets && assets.borders) {
		styles = {
			borderImage: `url(${assets.borders}) 30 round`,
		};
	}	

	const BoxStyled = useMemo(() => {
		if (selectedTheme === 'H') {
			return styled(Box)(({ theme }) => ({
				borderRadius: theme.shape.borderRadius,
				border: `${theme.spacing(3)} solid transparent`,
				padding: theme.spacing(4),
				backgroundColor: theme.palette.background.paper,
				margin:
					getUrlChatMode()?.toLocaleLowerCase() === 'G'.toLocaleLowerCase()
						? theme.spacing(4, 0, 4, 4)
						: theme.spacing(4, 4, 4, 0),
			}));
		} else if (selectedTheme === 'C') {
			return styled(Box)(({ theme }) => ({
				borderRadius: theme.shape.borderRadius,
				border: `${theme.spacing(4)} solid transparent`,
				padding: theme.spacing(4),
				backgroundColor: theme.palette.background.paper, //'background.default', // https://www.schemecolor.com/wp-content/themes/colorsite/include/cc4.php?color0=512888&color1=7349ac&color2=eb6123&color3=da4200&pn=Halloween%20Purple%20and%20Orange
				margin:
					getUrlChatMode()?.toLocaleLowerCase() === 'G'.toLocaleLowerCase()
						? theme.spacing(4, 0, 4, 4)
						: theme.spacing(4, 4, 4, 0),
				textShadow: theme.shadows[1],
			}));
		} else {
			return styled(Box)(({ theme }) => ({
				borderEndEndRadius: theme.spacing(5),
				borderEndStartRadius: theme.spacing(5),
				borderStartStartRadius: theme.spacing(5),
				padding: theme.spacing(4),
				backgroundColor: theme.palette.background.paper, //'background.default', // https://www.schemecolor.com/wp-content/themes/colorsite/include/cc4.php?color0=512888&color1=7349ac&color2=eb6123&color3=da4200&pn=Halloween%20Purple%20and%20Orange
				margin:
					getUrlChatMode()?.toLocaleLowerCase() === 'G'.toLocaleLowerCase()
						? theme.spacing(4, 0, 4, 4)
						: theme.spacing(4, 4, 4, 0),
			}));
		}
	}, [selectedTheme]);

	return (
		<BoxStyled component="div" style={{ overflowWrap: 'anywhere', ...styles }}>
			{children}
		</BoxStyled>
	);
};
