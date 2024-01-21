import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
	palette: {
		text: {
			primary: '#000000',
		},
		background: {
			paper: '#d6ba8a99',
		},
	},
	spacing: [0, 5, 8, 10, 15, 20],
	shape: {
		borderRadius: 30,
	},
	typography: {
		fontWeightBold: 'bold',
	},
	shadows: [
		'none',
		'-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
	],
});

const halloweenTheme = createTheme({
	...defaultTheme,
	palette: {
		text: {
			primary: '#DA4200',
		},
		background: {
			paper: '#7349ac99',
		},
	},
	shape: {
		borderRadius: 10,
	},
});

const christmasTheme = createTheme({
	...defaultTheme,
	palette: {
		text: {
			primary: '#FFFFFF',
		},
		background: {
			paper: '#a1795499',
		},
	},
	shape: {
		borderRadius: 30,
	},
});

export const getTheme = (theme: string | null) => {
	const selectedTheme = theme === null || theme === '' ? 'D' : theme.toLocaleUpperCase();

	switch (selectedTheme) {
		case 'H':
			return halloweenTheme;
		case 'C':
			return christmasTheme;
		case 'D':
		default:
			return defaultTheme;
	}
};
