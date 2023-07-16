import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '../components/menu';

const ResultsPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [parties, setParties] = useState(null);

	const fetchResults = async () => {
		const results = [];
		setIsLoading(true);
		
		try {
			const querySnapshot = await getDocs(collection(db, 'generales'));
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				results.push(data.results);
			});

			return results;
		} catch {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}

	const formatData = (predictions) => {
		const parties = [];

		predictions.forEach((prediction) => {
			prediction.forEach((party) => {
				const found = parties.find((x) => x.name === party.name);
				if (found) {
					found.seats += party.seats;
				} else {
					parties.push({
						name: party.name,
						seats: party.seats
					});
				};
			});
		});

		return parties.map((x) => {
			return {
				name: x.name, 
				seats: Math.round(x.seats / predictions.length),
				// TODO: ver si lo uso al final
				// legend: !Number.isInteger(x.seats) ? `${x.seats / predictions.length} escaños` : `${Math.round(x.seats / predictions.length)}-${Math.floor(x.seats / predictions.length)} escaños`
			};
		});
	}

	useEffect(() => {
		async function fetchAndFormatData() {
			const results = await fetchResults();
			const formattedData = formatData(results);
			console.log(formattedData);
			// setParties(formatResults(results));
		}

		fetchAndFormatData();
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

	if (isError) {
		return (
			<>
				<Menu />
				<Box sx={{paddingTop: "40px"}} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
					<Typography>Ocurrió un error al recuperar los resultados, inténtalo de nuevo más tarde</Typography>
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