import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

const Party = ({ party, availableSeats, onTotalSeatsChanged }) => {
	const [partySeats, setPartySeats] = useState(party.projectedSeats);

	const updateSeats = (number, action) => {
		setPartySeats(partySeats + number);
		
		switch (action) {
			case 'increase':
				onTotalSeatsChanged()
				break;
		
			default:
				break;
		}
	}

	const buttons = [
		{ condition: partySeats < 5, value: -5, label: "-5", totalSeatsAction: 'increase' },
		{ condition: partySeats === 0, value: -1, label: "-1", totalSeatsAction: 'increase' },
		{ condition: availableSeats === 0, value: 1, label: "+1", totalSeatsAction: 'decrease',},
		{ condition: availableSeats < 5, value: 5, label: "+5", totalSeatsAction: 'decrease' },
	];

	return (
		<Box>
			<Paper elevation={3}>
				<Typography variant='h6'>{party.name}</Typography>
				{partySeats}
				<br />
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					{buttons.map((item) => {
						return (
							<Button 
								size="large" 
								variant='outlined'
								disabled={item.condition}
								onClick={() => {
									updateSeats(item.value, item.action)}
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