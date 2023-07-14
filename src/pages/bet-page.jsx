import { useState } from 'react';
import { parties } from '../data/data';
import Party from '../components/party';
import SeatsCounter from '../components/seats-counter';
import Box from '@mui/material/Box';

const TOTAL_SEATS = 350;

const BetPage = () => {
	const [availableSeats, setAvailableSeats] = useState(TOTAL_SEATS);

	const updateAvailableSeats = (remainingSeats) => {
		setAvailableSeats(remainingSeats)
	}

	return (
		<Box sx={{pb: 7}}>
			<SeatsCounter availableSeats={availableSeats} />
			{parties.map(party => {
				return <Party key={party.name} party={party} availableSeats={availableSeats} updateTotalSeats={() => {}} />;
			})}
		</Box>
	);
};

export default BetPage;
