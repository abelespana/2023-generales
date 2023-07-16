import { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ResultsPage = () => {
	const fetchResults = async () => {
		const results = [];
		const querySnapshot = await getDocs(collection(db, 'generales'));

		querySnapshot.forEach((doc) => {
			const data = doc.data();
			results.push(data.results);
		});

		return results;
	}

	useEffect(() => {
		fetchResults();
	}, [])


	return (
		<h1>Results Page works!</h1>
	)
}

export default ResultsPage;