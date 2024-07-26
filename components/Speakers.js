import { useEffect, useState } from "react";
import parse from "html-react-parser";

const Speakers = () => {
	const [speakers, setSpeakers] = useState([]);

	useEffect(() => {
		const fetchSpeakers = async () => {
			try {
				const response = await fetch(
					"https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task/speakers"
				);
				const data = await response.json();
				setSpeakers(data);
			} catch (error) {
				console.error("Error fetching speakers:", error);
			}
		};

		fetchSpeakers();
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">
				THIS IS SPEAKERS SECTION
			</h2>
			{speakers.length > 0 ? (
				<div className="mb-8">
					{speakers[0].about && (
						<div className="prose prose-gray mb-6">
							{parse(speakers[0].about)}
						</div>
					)}
				</div>
			) : (
				<p className="text-center text-gray-600">Loading...</p>
			)}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{speakers.map((speaker) => (
					<div
						key={speaker.speaker_order}
						className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
					>
						<img
							src={speaker.image_url}
							alt={speaker.name}
							className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
						/>
						<h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
							{speaker.name}
						</h3>
						<p className="text-lg text-gray-600 mb-1 text-center">
							{speaker.designation}
						</p>
						<p className="text-sm text-gray-500 mb-4 text-center">
							{speaker.organisation}
						</p>
						<div className="flex space-x-4">
							{speaker.facebook_url && (
								<a
									href={speaker.facebook_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800"
								>
									<img
										src="facebook.png"
										alt="Facebook"
										className="w-6 h-6"
									/>
								</a>
							)}
							{speaker.twitter_url && (
								<a
									href={speaker.twitter_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-600"
								>
									<img
										src="twitter.png"
										alt="Twitter"
										className="w-6 h-6"
									/>
								</a>
							)}
							{speaker.linkedin_url && (
								<a
									href={speaker.linkedin_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-700 hover:text-blue-900"
								>
									<img
										src="linkedin.png"
										alt="LinkedIn"
										className="w-6 h-6"
									/>
								</a>
							)}
							{speaker.website_url && (
								<a
									href={speaker.website_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-700 hover:text-gray-900"
								>
									<img
										src="web.png"
										alt="Website"
										className="w-6 h-6"
									/>
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Speakers;
