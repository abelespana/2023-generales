import { useState } from 'react';
import { parties } from '../data/data';
import Party from '../components/party';
import SeatsCounter from '../components/seats-counter';

const TOTAL_SEATS = 350;

const BetPage = () => {

	const [availableSeats, setAvailableSeats] = useState(TOTAL_SEATS)

	const updateAvailableSeats = (operation, number) => {
		switch (operation) {
			case 'increase':
				setAvailableSeats(availableSeats + number)
				break;
			case 'decrease':
				setAvailableSeats(availableSeats - number)
				break;
			default:
				break;
		}
	}

	const updatePartySeats = (party) => {
		console.log(`updated ${party.name}`);
	}

	return (
		<div>
		<SeatsCounter availableSeats={availableSeats} />
		{ parties.map((party) => {
			return (
				<Party 
					key={party.name} 
					party={party}
					availableSeats={availableSeats}
					onTotalSeatsChanged={updateAvailableSeats}
				/>
			)
		})}
		</div>

	)
};

export default BetPage;
