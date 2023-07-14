import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

const Party = ({ party, availableSeats, updateTotalSeats }) => {
	const [partySeats, setPartySeats] = useState(party.projectedSeats);

	const updateSeats = (number) => {
		updateTotalSeats(availableSeats - number);
		setPartySeats(partySeats + number);
	}

	const buttons = [
		{ condition: partySeats < 5, value: -5, label: "-5"  },
		{ condition: partySeats === 0, value: -1, label: "-1"  },
		{ condition: availableSeats === 0, value: 1, label: "+1" },
		{ condition: availableSeats < 5, value: 5, label: "+5" },
	];

	return (
		<Box my={2}>
			<Paper p={2} elevation={3}>
				<Typography variant='h6'>{party.name}</Typography>
				{partySeats}
				<br />
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					{buttons.map((item) => {
						return (
							<Button
								key={item.value}
								size="large" 
								variant='outlined'
								disabled={item.condition}
								onClick={() => {
									updateSeats(item.value)}
								}
							>
								{item.label}
							</Button>
						)
					})}
    		</ButtonGroup>
			</Paper>
		</Box>
	)
}

export default Party;