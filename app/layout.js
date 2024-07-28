import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
            <SpeedInsights />
		</html>
	);
};

export default Layout;
