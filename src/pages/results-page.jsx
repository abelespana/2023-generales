import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '../components/menu';

const ResultsPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const fetchResults = () => {
		const results = [];
		const querySnapshot = getDocs(collection(db, 'generales'));

		setIsLoading(true);

		querySnapshot.then((doc) => {
			const data = doc.data();
			results.push(data.results);
			return results;
		})
		.catch(() => {})
		.finally(() => { setIsLoading(false) });
	}

	useEffect(() => {
		fetchResults();
	}, [])


	if (isLoading) {
		return (
			<>
				<Menu />
				<Box sx={{paddingTop: "40px"}} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
					<CircularProgress sx={{ marginBottom: '16px' }}/>
					<Typography>Contando votos...</Typography>
				</Box>
			</>

		)
	}

	return (
		<>
			<Menu />
			<Box sx={{paddingTop: "40px"}} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
				<p> Resultados</p>
			</Box>
		</>
	)
}

export default ResultsPage;