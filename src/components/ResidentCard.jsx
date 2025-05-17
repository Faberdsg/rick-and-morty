import { useEffect } from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import './ResidentCard.css';

function ResidentCard({ url }) {
	const { fetchingData, data: resident, loading } = useFetchApi();

	useEffect(() => {
		fetchingData(url);
	}, [url]);

	if (loading) {
		return <p>Loading...</p>;
	}

	const totalEpisodes = resident?.episode?.length;
	const totalEpisodesText = totalEpisodes === 1 ? 'episode' : 'episodes';
	const statusClass =
		resident?.status === 'Alive'
			? 'alive'
			: resident?.status === 'Dead'
			? 'dead'
			: 'unknown';

	if (!resident) {
		return null;
	}

	return (
		<div className="resident">
			<div className="resident_image">
				<img
					className="resident_img"
					src={resident?.image}
					alt={resident?.name}
				/>
				<span className="resident_status">
					<span className={`resident--${statusClass}`}></span>
					{resident?.status}
				</span>
			</div>

			<div className="resident_body">
				<h2 className="resident_name">{resident?.name}</h2>
				<div className="resident_content"></div>

				<p className="resident_item">
					<b>Specie: </b>
					{resident?.species}
				</p>
				<p className="resident_item">
					<b>Origin: </b>
					{resident?.origin?.name}
				</p>
				<p className="resident_item">
					<b>Episodes were the character appeared: </b> {totalEpisodes}{' '}
					{totalEpisodesText}
				</p>
			</div>
		</div>
	);
}

export default ResidentCard;
