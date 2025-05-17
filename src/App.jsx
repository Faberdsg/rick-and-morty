import { useEffect, useState } from 'react';
import { useFetchApi } from './hooks/useFetchApi';
import { getRandomLocationById } from './lib/utils';
import Location from './components/Location';
import Residents from './components/Residents';
import Search from './components/Search';
import './App.css';

const BASE_URL = 'https://rickandmortyapi.com/api/location/';

function App() {
	const { fetchingData, data: location, loading } = useFetchApi();
	const [locationId, setLocationId] = useState(getRandomLocationById());

	useEffect(() => {
		fetchingData(`${BASE_URL}${locationId}`);
	}, [locationId]);

	return (
		<>
			<header className="header" />
			<main>
				<section className="section">
					<div className="container">
						<Search onSearch={setLocationId} />
					</div>
				</section>

				<section className="section">
					<div className="container">
						{loading ? <h2>Loading...</h2> : <Location location={location} />}
					</div>
				</section>

				<section className="section">
					<div className="container">
						{location && <Residents residents={location.residents} />}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
