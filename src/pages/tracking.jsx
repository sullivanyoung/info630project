import { Navbar } from '../components/navbar';
import TrackingImage from '../images/orderTracking.png';

export const Tracking = () => {
	return (
		<>
			<Navbar />
			<div className="grid place-items-center mx-32">
				<img
					className="p-10"
					src={TrackingImage}
					alt="tracking"
					className="w-full object-cover ml-auto mr-auto rounded-md"
				/>
			</div>
			<div className="grid place-items-center">
				<button
					className="mt-5 bg-gradient-to-r from-red-300 to-red-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-10 whitespace-nowrap"
					onClick={() => {
						var answer = window.confirm('Are you sure?');
						if (answer) {
							alert('The order with ID 122344 has been cancelled');

							// TODO: Replace this hack
							window.location.href = '/home';
						} else {
							//some code
						}
					}}
				>
					Cancel Order
				</button>
			</div>
		</>
	);
};
