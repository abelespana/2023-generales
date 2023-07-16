import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import IosShareIcon from '@mui/icons-material/IosShare';

const SaveAndShare = ({ saveButtonClicked, shareButtonClicked, saveButtonDisabled}) => {
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
					{saveButtonDisabled ? 'Guardado' : 'Guardar'}
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