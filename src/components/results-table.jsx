import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ResultsTable = ({data = []}) => {

	if (!data.length) {
		return (
		<Typography sx={{mb: '12px'}} align='center'>No hay suficientes votos para predecir un resultado. Vuelve más tarde.</Typography>
		)
	}
	return (
		<>
		<TableContainer component={Paper}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell align='center'>Partido</TableCell>
						<TableCell align='center'>Diputados</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<TableRow
							key={item.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align='center'>{item.name}</TableCell>
							<TableCell align='center'>{item.legend}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
		</>
	)
}

export default ResultsTable;