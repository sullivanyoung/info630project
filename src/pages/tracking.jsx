import { Navbar } from '../components/navbar';
import TrackingImage from '../images/orderTracking.png';

export const Tracking = () => {
	return (
		<>
			<Navbar />
			<img
				src={TrackingImage}
				alt="tracking"
				className="w-full object-cover ml-auto mr-auto rounded-md"
			/>
		</>
	);
};
