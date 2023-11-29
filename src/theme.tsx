import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
	palette: {
		text: {
			primary: '#FFFFFF',
		},
		background: {
			default: undefined,
			paper: '#a1795499',
		},
	},
	spacing: [0, 5, 8, 10, 15],
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
	palette: {
		text: {
			primary: '#DA4200',
		},
		background: {
			default: '#7349ac99',
		},
	},
	spacing: [0, 5, 8, 10, 15],
	shape: {
		borderRadius: 10,
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

const christmasTheme = createTheme({
	palette: {
		text: {
			primary: '#FFFFFF',
		},
		background: {
			default: undefined,
			paper: '#a1795499',
		},
	},
	spacing: [0, 5, 8, 10, 15],
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

export const getTheme = (theme: 'H' | 'C' | undefined) => {
	// return halloweenTheme;
	// switch (theme) {
	// 	case 'H':
	// 		return halloweenTheme;
	// 	case 'C':
	// 		return christmasTheme;
	// 	default:
	// 		return defaultTheme;
	// }
	return christmasTheme;
};
