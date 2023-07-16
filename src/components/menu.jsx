import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

const Menu = () => {
	return (
		<Box sx={{ flexGrow: 1}}>
			<AppBar position="fixed">
				<Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1, pl: "8px" }}>
				 🇪🇸 Elecciones Generales 23J
				</Typography>
			</AppBar>
		</Box>
	)
}

export default Menu;