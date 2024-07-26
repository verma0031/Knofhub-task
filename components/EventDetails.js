import CountdownTimer from "./CountdownTImer";

const EventDetails = ({ event }) => {
	const {
		name,
		start_date,
		end_date,
		organiser_name,
		organiser_image_url,
		organiser_email,
		organiser_website
	} = event;

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
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border-2">
			<div className="md:flex">
				<div className="p-8">
					<h2 className="block mt-1 text-3xl font-semibold leading-tight text-black">
						{name}
					</h2>
					<div className="flex items-center justify-between my-4">
						<p className="flex items-center">
							<img
								src="video-camera.png"
								className="w-6 h-6 mr-2"
								alt="Video Camera Icon"
							/>
							Online
						</p>
						<p className="flex items-center">
							<img
								src="ticket.png"
								className="w-6 h-6 mr-2"
								alt="Video Camera Icon"
							/>
							Paid
						</p>
					</div>

					<div>
						<p>
							<strong>Event Live Link:</strong>
							<a
								href="https://dev.konfhub.com/konfhub-frontend-evaluation-task"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:text-blue-700 underline ml-2"
							>
								Open Streaming Website
							</a>
						</p>
						<p className="text-lg my-2">
							<strong>Date:</strong>
							<span className="ml-2 font-thin text-base">
								{formatDate(start_date)} - {formatDate(end_date)}
							</span>
						</p>
					</div>
					<div className="mt-4">
						<p className="font-medium text-lg">EVENT STARTS IN</p>
						<CountdownTimer startDate={start_date} />
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
