import parse from "html-react-parser";

const AboutEvent = ({ details, posterUrl }) => {
	return (
		<div className="about-event">
			{posterUrl && (
				<div className="mb-4 p-3 bg-white rounded-lg shadow-xl">
					<img
						src={posterUrl}
						alt="Event Poster"
						className="w-full h-auto rounded-lg"
					/>
				</div>
			)}
			<h2 className="text-xl font-bold mb-4">About the Event</h2>
			<div className="event-description"> {parse(details)}</div>
		</div>
	);
};

export default AboutEvent;
