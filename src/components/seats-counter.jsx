import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const SeatsCounter = ({availableSeats}) => {
	const seatsText = "Escaños por asignar";

	return (
		
		<Paper sx={{p: 1, position: 'fixed', left: 0, width: '100%', zIndex: 1}} elevation={3}>
			<Typography align="center" variant='h4'>{availableSeats}</Typography>
			<Typography align="center" variant='subtitle2'>{seatsText.toUpperCase()}</Typography>
		</Paper>
	)
}


export default SeatsCounter;