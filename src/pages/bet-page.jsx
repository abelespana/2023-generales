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
		<>
			<SeatsCounter availableSeats={availableSeats} />
		<Box sx={{pb: 7, pt: 10}}>
			{parties.map(party => {
				return <Party key={party.name} party={party} availableSeats={availableSeats} updateTotalSeats={updateAvailableSeats} />;
			})}
		</Box>
			</>
	);
};

export default BetPage;
