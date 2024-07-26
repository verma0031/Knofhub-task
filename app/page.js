"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import EventDetails from "@/components/EventDetails";
import AboutEvent from "@/components/AboutEvent";
import Speakers from "@/components/Speakers";
import Workshops from "@/components/Workshops";
import Sponsors from "@/components/Sponsors";
import Host from "@/components/Host";

const Page = () => {
	const [eventData, setEventData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
				);
				const data = await response.json();
				setEventData(data);
			} catch (error) {
				console.error("Error fetching event data:", error);
			}
		};

		fetchData();
	}, []);

	if (!eventData) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Header />
			<div className="container mx-auto p-4 flex">
				<div className="left-panel w-3/4 pr-4 overflow-y-auto h-screen hide-scrollbar">
					<AboutEvent
						details={eventData.description}
						posterUrl={eventData.event_poster_url}
					/>
					<Speakers />
					<Workshops />
					<Sponsors />
				</div>
				<div className="right-panel w-1/4 p-4 sticky top-0 self-start">
					<EventDetails event={eventData} />
					<div className="flex flex-col gap-2">
						<a
							href={eventData.buy_now_link} // replace with the actual link if available
							target="_blank"
							rel="noopener noreferrer"
							className="bg-black text-white text-center py-2 my-2 rounded-lg shadow-md hover:bg-gray-700"
						>
							Buy Now
						</a>
						<a
							href={eventData.event_website}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white text-black border-2 border-black text-center py-2 mb-4 rounded-lg shadow-md hover:text-blue-500"
						>
							Official Website
						</a>
					</div>
					<Host event={eventData} />
				</div>
			</div>
		</div>
	);
};

export default Page