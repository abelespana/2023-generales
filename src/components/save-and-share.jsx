import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import IosShareIcon from '@mui/icons-material/IosShare';

const SaveAndShare = ({ saveButtonClicked, shareButtonClicked, saveButtonDisabled, isSaving}) => {

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
		<Paper sx={{p: 1, position: 'fixed', left: 0, width: '100%', zIndex: 1}} elevation={3}>
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
				<Button
					sx={{width: '200px'}}
					variant="contained" 
					onClick={shareButtonClicked} 
					startIcon={<IosShareIcon />} 
					size='medium'
				>
					Compartir
				</Button>
			</Box>
		</Paper>
	)
}

export default SaveAndShare;