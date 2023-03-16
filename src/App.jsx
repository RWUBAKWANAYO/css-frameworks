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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
				<Container className={classes.cardGrid} maxWidth='md'>
					<Grid container spacing={4}>
						{cards.map((el) => (
							<Grid item key={el} xs={12} sm={6} lg={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image='https://source.unsplash.com/random'
										title='Image title'
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant='h5'>
											Heading
										</Typography>
										<Typography>This is a media card. you can use to view content</Typography>
									</CardContent>
									<CardActions>
										<Button size='small' color='primary'>
											View
										</Button>
										<Button size='small' color='primary'>
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography variant='h6' align='center' gutterButtom>
					Footer
				</Typography>
				<Typography variant='subtitle1' align='center' color='textSecondary'>
					Something heren to give footer a purpose
				</Typography>
			</footer>
		</>
	);
};

export default App;
