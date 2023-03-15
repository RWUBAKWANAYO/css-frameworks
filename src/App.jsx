import React from 'react';
import {
	Typography,
	AppBar,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
	Button,
	ButtonGroup,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import useStyles from './components/ButtonsStyles';

const App = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant='h6'>Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth='sm'>
						<Typography variant='h2' color='textPrimary' align='center' gutterBottom>
							Photo Album
						</Typography>
						<Typography variant='h6' color='textSecondary' align='center'>
							A photo album is a collection of photographs, typically collected in a book or box,
							that are organized chronologically or by theme. Photo albums are often used to store
							and preserve precious memories, making them a great way to share and remember special
							moments.
						</Typography>
						<div className={classes.buttons}>
							<Grid container spacing={2} justifyContent='center'>
								<Grid item>
									<Button variant='contained' color='primary'>
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
		</>
	);
};

export default App;
