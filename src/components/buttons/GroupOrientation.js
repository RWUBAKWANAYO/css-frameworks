import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

const buttons = [
	<Button key='one'>One</Button>,
	<Button key='two'>Two</Button>,
	<Button key='three'>Three</Button>,
];

const GroupOrientation = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				'& > *': {
					m: 1,
				},
			}}
		>
			<ButtonGroup orientation='vertical' aria-label='vertical outlined button group'>
				{buttons}
			</ButtonGroup>
			<ButtonGroup
				orientation='vertical'
				aria-label='vertical contained button group'
				variant='contained'
			>
				{buttons}
			</ButtonGroup>
			<ButtonGroup
				orientation='vertical'
				aria-label='vertical contained button group'
				variant='text'
			>
				{buttons}
			</ButtonGroup>
		</Box>
	);
};

export default GroupOrientation;
