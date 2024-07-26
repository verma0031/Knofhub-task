"use client";

const Header = () => {
	return (
		<header className="bg-white shadow p-4 flex items-center justify-between">
			<img
				src="https://media.konfhub.com/konfhub-logo-purple.svg"
				alt="KonfHub Logo"
				className="h-10"
			/>
			<div className="flex items-center">
				<span className="mr-2">
					<img
						src="people.png"
						alt="User Logo"
						className="h-10"
					/>
				</span>
			</div>
		</header>
	);
};

export default Header;
