import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { WhatsappShareButton } from 'react-share';

const SHARING_URL = 'https://generales23j.netlify.app';

const SaveAndShare = ({ saveButtonClicked, saveButtonDisabled, isSaving, parties, isSaved }) => {
	const getSharingResults = () => {
		const results = [];
		const sortedParties = parties.sort((a, b) => b.projectedSeats - a.projectedSeats);

		sortedParties.forEach((party) => {
			let str = null;

			if (party.projectedSeats > 0) {
				const seatsStr = party.projectedSeats > 1 ? 'diputados/as' : 'diputado/a'
				if (party.short) {
					str = `${party.short}: ${party.projectedSeats} ${seatsStr}`
				} else {
					str = `${party.name}: ${party.projectedSeats} ${seatsStr}`
				}

				results.push(str);
			}
		});

		return results;
	}

	const getSharingMessage = () => {
		let str = `Esta es mi predicción para las elecciones generales del 23-J\n`;
		const sharingResults = getSharingResults();

		sharingResults.forEach((item) => {
			str += `${item}\n`
		});

		str += `\nHaz la tuya en ${SHARING_URL}`

		return str;
	}

	const getSavingText = () => {
		if (isSaving) {
			return 'Guardando...';
		}

		if (saveButtonDisabled) {
			return 'Guardado';
		}

		return 'Guardar'
	}

	return (
		<Paper sx={{p: 1, position: 'fixed', left: 0, top: 32, width: '100%', zIndex: 1}} elevation={3}>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Button 
					sx={{width: '200px', marginBottom: '12px'}}
					variant="contained"
					disabled={saveButtonDisabled}
					onClick={saveButtonClicked} 
					startIcon={<SaveIcon />} 
					color='success' 
					size='medium'
				>
					{getSavingText()}
				</Button>

				<WhatsappShareButton url={getSharingMessage()}>
					<Button
						sx={{width: '200px'}}
						variant="contained"
						disabled={!isSaved}
						startIcon={<WhatsAppIcon />}
						size='medium'
					>
						Compartir
					</Button>
				</WhatsappShareButton>
			</Box>
		</Paper>
	)
}

export default SaveAndShare;