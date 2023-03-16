import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	container: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		padding: '20px 0 40px 0',
	},
	icons: { marginRight: '20px' },
	buttons: { marginTop: '40px' },
	cardGrid: {
		padding: '20px 0',
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%',
	},
	cardContent: { flexGrow: '1' },
	footer: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		padding: '50px 0',
	},
});

export default useStyles;
