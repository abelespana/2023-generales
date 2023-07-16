import { useState } from 'react';
import { parties } from '../data/data';
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import Party from '../components/party';
import SeatsCounter from '../components/seats-counter';
import Box from '@mui/material/Box';
import SaveAndShare from '../components/save-and-share';

const TOTAL_SEATS = 50;

const BetPage = () => {
	const [availableSeats, setAvailableSeats] = useState(TOTAL_SEATS);
	const [savingButtonDisabled, setSavingButtonDisabled] = useState(false);

	const updateAvailableSeats = (number) => {
		const remainingSeats = availableSeats - number;
		
		if (remainingSeats === 0) {
			setSavingButtonDisabled(false);
		}
		setAvailableSeats(remainingSeats)
	}

	const updatePartySeats = (party, seats) => {
		const found = parties.find((x => x.name === party));
		found.projectedSeats = seats;
	}

	const getTotalResults = () => {
		return parties.map((party) => {
			return {
				name: party.short ? `${party.short}` : `${party.name}`,
				seats: party.projectedSeats
			}
		});
	}

	const saveBet = () => {
		const collectionId = 'generales';
		const documentId = `${new Date().valueOf()}`;
		const results = getTotalResults();

		console.log(results);
	
		setDoc(doc(db, collectionId, documentId), {
			results,
		});
	}

	const shareBet = () => {
		console.log('share button clicked');
	}

	const ResultsFrame = () => {
		if (availableSeats === 0) {
			return (<SaveAndShare saveButtonClicked={saveBet} shareButtonClicked={shareBet} saveButtonDisabled={savingButtonDisabled}/>)
		}

		return (<SeatsCounter availableSeats={availableSeats}/>)
	}

	return (
		<>
		<ResultsFrame />
		<Box sx={{pb: 7, pt: 12}}>
			{parties.map(party => {
				return <Party key={party.name} party={party} availableSeats={availableSeats} updateTotalSeats={updateAvailableSeats} updatePartySeats={updatePartySeats}/>;
			})}
		</Box>
			</>
	);
};

export default BetPage;
