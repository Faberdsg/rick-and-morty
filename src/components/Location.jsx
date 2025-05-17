import './Location.css';
function Location({ location }) {
	if (!location) return null;

	const totalResidents = location.residents.length;
	const totalResidentsText = totalResidents === 1 ? 'resident' : 'residents';

	return (
		<div className="location">
			<h2 className="location_name">{location.name}</h2>

			<div className="location_content">
				<p className="location_item">
					<b>Type:</b> {location.type}
				</p>
				<p className="location_item">
					<b>Dimension:</b> {location.dimension}
				</p>
				<p className="location_item">
					<b>Residents:</b> {totalResidents} {totalResidentsText}
				</p>
			</div>
		</div>
	);
}

export default Location;
