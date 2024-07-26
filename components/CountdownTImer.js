import { useEffect, useState } from "react";

const CountdownTimer = ({ startDate }) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(startDate) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeLeft]);

	return (
		<div className="text-xl font-semibold">
			{timeLeft.days !== undefined ? (
				<span>
					{timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M :{" "}
					{timeLeft.seconds}S
				</span>
			) : (
				<span>Time's up!</span>
			)}
		</div>
	);
};

export default CountdownTimer;
