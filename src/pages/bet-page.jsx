import { useState } from 'react';
import { parties } from '../data/data';
import Party from '../components/party';
import SeatsCounter from '../components/seats-counter';
import Box from '@mui/material/Box';
import SaveAndShare from '../components/save-and-share';

const TOTAL_SEATS = 50;

const BetPage = () => {
	const [availableSeats, setAvailableSeats] = useState(TOTAL_SEATS);
	const [savingStatus, setSavingStatus] = useState(false);

	const updateAvailableSeats = (remainingSeats) => {
		setAvailableSeats(remainingSeats)
	}

	const saveBet = () => {
		console.log('save button clicked!');
		setTimeout(() => {
			// Controlar el flag cuando se hacen cambios en la apuesta
			setSavingStatus(true);
		}, 2000);
	}

	const shareBet = () => {
		console.log('share button clicked');
	}

	const ResultsFrame = () => {
		if (availableSeats === 0) {
			return (<SaveAndShare saveButtonClicked={saveBet} shareButtonClicked={shareBet} saveButtonDisabled={savingStatus}/>)
		}

		return (<SeatsCounter availableSeats={availableSeats}/>)
	}

	return (
		<>
		<ResultsFrame />
		<Box sx={{pb: 7, pt: 12}}>
			{parties.map(party => {
				return <Party key={party.name} party={party} availableSeats={availableSeats} updateTotalSeats={updateAvailableSeats} />;
			})}
		</Box>
			</>
	);
};

export default BetPage;
