import { Navbar } from '../components/navbar';
import TrackingImage from '../images/orderTracking.png';

export const Tracking = () => {
	return (
		<>
			<Navbar />
			<h1 className="font-bold text-2xl py-2">Tracking</h1>
			<img
				src={TrackingImage}
				alt="tracking"
				className="w-full object-cover ml-auto mr-auto rounded-md"
			/>
		</>
	);
};
