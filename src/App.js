import './App.css';
import { useState } from 'react';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PollIcon from '@mui/icons-material/Poll';
import Container from '@mui/material/Container';

import BetPage from './pages/bet-page';
import ResultsPage from './pages/results-page';

const Navigation = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const navigate = useNavigate();

	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation
				showLabels
				value={selectedTab}
				onChange={(_, newValue) => {
					setSelectedTab(newValue);
				}}
			>
				<BottomNavigationAction
					label="Urnas"
					onClick={() => navigate("/polls")}
					icon={<HowToVoteIcon />}
				/>
				<BottomNavigationAction
					label="Resultados"
					icon={<PollIcon />}
					onClick={() => navigate("/results")}
				>
				</BottomNavigationAction>
			</BottomNavigation>
		</Paper>
	)
}

function App() {
	return (
		<Container maxWidth="xs" sx={{ px: 0 }}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<BetPage />}></Route>
					<Route path='/polls' element={<BetPage />}></Route>
					<Route path='/results' element={<ResultsPage />}></Route>
				</Routes>
				<Navigation />
			</BrowserRouter>
		</Container>

	);
}

export default App;
