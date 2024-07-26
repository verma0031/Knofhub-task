import { useEffect, useState } from "react";

const Sponsors = () => {
	const [sponsors, setSponsors] = useState({
		categorized: [],
		uncategorized: [],
	});

	useEffect(() => {
		const fetchSponsors = async () => {
			try {
				const response = await fetch(
					"https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task/sponsors"
				);
				const data = await response.json();
				setSponsors(data);
			} catch (error) {
				console.error("Error fetching sponsors:", error);
			}
		};

		fetchSponsors();
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">
				THIS IS EVENT SPONSORS
			</h2>
			<p className="text-gray-600 mb-4">
				This is description of sponsors section.
			</p>

			{sponsors.categorized.length > 0 && (
				<div className="mb-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{sponsors.categorized.map((category) =>
							category.sponsors.map((sponsor) => (
								<a
									key={sponsor.sponsor_id}
									href={sponsor.sponsor_url}
									target="_blank"
									rel="noopener noreferrer"
									className="block p-4 bg-white rounded shadow-md"
								>
									<img
										src={sponsor.sponsor_image_url}
										alt={sponsor.sponsor_name}
										className="w-full h-32 object-cover rounded mb-4"
									/>
								</a>
							))
						)}
					</div>
				</div>
			)}

			<div className="flex items-center mb-4">
				<h3 className="text-2xl font-semibold text-gray-700">
					SPONSOR CATEGORY
				</h3>
				<div className="flex-grow h-0.5 bg-gray-300 ml-4"></div>
			</div>

			{sponsors.uncategorized.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{sponsors.uncategorized.map((sponsor) => (
						<a
							key={sponsor.sponsor_id}
							href={sponsor.sponsor_url}
							target="_blank"
							rel="noopener noreferrer"
							className="block p-4 bg-white rounded shadow-md"
						>
							<img
								src={sponsor.sponsor_image_url}
								alt={sponsor.sponsor_name}
								className="w-full h-32 object-cover rounded mb-4"
							/>
						</a>
					))}
				</div>
			)}
		</div>
	);
};

export default Sponsors;
