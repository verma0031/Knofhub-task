const Host = ({ event }) => {

    const {
			organiser_name,
			organiser_image_url,
			organiser_website,
			organizer_facebook_url,
			organizer_linkedin_url,
			organizer_twitter_url,
		} = event;


	return (
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border-2 p-4">
			<h3 className="text-2xl font-medium mb-4">HOSTED BY</h3>

			<div className="flex items-center">
				<img
					src={organiser_image_url}
					alt="Host"
					className="w-10 h-10 rounded-full mb-4 border-4 border-gray-200"
				/>
				<p className="text-lg font-bold">{organiser_name}</p>
			</div>
			<p className="text-gray-600">
				This is the description of the organiser. You can get to know more about
				the organiser here.
			</p>
			
			<div className="flex space-x-4 my-3">
				{organizer_facebook_url && (
					<a
						href={organizer_facebook_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:text-blue-800"
					>
						<img src="facebook.png" alt="Facebook" className="w-6 h-6" />
					</a>
				)}
				{organizer_twitter_url && (
					<a
						href={organizer_twitter_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:text-blue-600"
					>
						<img src="twitter.png" alt="Twitter" className="w-6 h-6" />
					</a>
				)}
				{organizer_linkedin_url && (
					<a
						href={organizer_linkedin_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-700 hover:text-blue-900"
					>
						<img src="linkedin.png" alt="LinkedIn" className="w-6 h-6" />
					</a>
				)}
				{organiser_website && (
					<a
						href={organiser_website}
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-700 hover:text-gray-900"
					>
						<img src="web.png" alt="Website" className="w-6 h-6" />
					</a>
				)}
			</div>
		</div>
	);
};

export default Host;
