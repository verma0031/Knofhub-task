import { useEffect, useState } from "react";
import parse from "html-react-parser";

const Workshops = () => {
	const [workshops, setWorkshops] = useState([]);

	useEffect(() => {
		const fetchWorkshops = async () => {
			try {
				const response = await fetch(
					"https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task/workshops"
				);
				const data = await response.json();
				setWorkshops(data);
			} catch (error) {
				console.error("Error fetching workshops:", error);
			}
		};

		fetchWorkshops();
	}, []);

	const formatDate = (date) => {
		const options = {
			month: "short",
			day: "numeric",
			year: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return new Date(date).toLocaleString("en-US", options);
	};
	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">
				THIS IS WORKSHOP SECTION
			</h2>

			{workshops.length > 0 ? (
				<div className="mb-8">
					{workshops[0].workshop_description && (
						<div className="prose prose-gray mb-6">
							{parse(workshops[0].workshop_description)}
						</div>
					)}
				</div>
			) : (
				<p className="text-center text-gray-600">Loading...</p>
			)}

			{workshops.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{workshops.map((workshop) => (
						<div
							key={workshop.workshop_order}
							className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
						>
							<img
								src={workshop.workshop_banner_url}
								alt={workshop.workshop_title}
								className="w-full h-32 object-cover rounded mb-4"
							/>
							<h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
								{workshop.workshop_title}
							</h3>
							<p className="text-sm text-gray-600 mb-1 text-center">
								{formatDate(workshop.start_timestamp)}
							</p>
							<div className="flex space-x-4">
								{workshop.workshop_speakers.map((speaker) => (
									<div
										key={speaker.speaker_id}
										className="flex flex-col items-center"
									>
										<img
											src={speaker.image_url}
											alt={speaker.name}
											className="w-12 h-12 rounded-full mb-2"
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			) : (
				<p className="text-center text-gray-600">Loading...</p>
			)}
		</div>
	);
};

export default Workshops;
