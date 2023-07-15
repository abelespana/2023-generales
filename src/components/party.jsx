import { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const Party = ({ party, availableSeats, updateTotalSeats }) => {
	const [partySeats, setPartySeats] = useState(party.projectedSeats);

	const updateSeats = (number) => {
		updateTotalSeats(availableSeats - number);
		setPartySeats(partySeats + number);
	}

	const buttons = [
		{ condition: partySeats < 5, value: -5, label: "-5", color: 'error' },
		{ condition: partySeats === 0, value: -1, label: "-1", color: 'error' },
		{ condition: availableSeats === 0, value: 1, label: "+1", color: 'success' },
		{ condition: availableSeats < 5, value: 5, label: "+5", color: 'success' },
	];

	return (
		<Card raised sx={{p: 1, mt: 2}}>
			<Grid container spacing={0.5}>
			<Grid item xs={10}>
				<Typography variant='subtitle1'>{party.name}</Typography>
				<Typography variant='subtitle2'>{party.short}</Typography>
				<Typography variant='p'>{party.leader}</Typography>
				<br/>
				<br/>
				<Typography variant='p'><b>2019:</b> {party.prevResults}</Typography>
			</Grid>
			<Grid item xs={2}>
				{partySeats}
			</Grid>
			</Grid>
			
			<ButtonGroup sx={{mt: 2}} variant="outlined" fullWidth>
				{buttons.map((item) => {
					return (
						<Button
							key={item.value}
							size="medium" 
							variant='outlined'
							color={item.color}
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
		</Card>
	)
}

export default Party;