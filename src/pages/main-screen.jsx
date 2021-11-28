import { Button } from '../components/linkButton';
import Logo from '../images/logo.png';

export const MainScreen = () => {
	return (
		<div className="justify-center text-center">
			<img src={Logo} alt="logo" className="ml-auto mr-auto" />
			<h2 className="text-green-500 py-2 text-3xl font-bold">
				Don't Panic, It's Organic!
			</h2>
			<h1 className="py-2 pb-10 text-3xl font-bold">Welcome to Greenfood</h1>
			<Button
				name="Get Started"
				location="/register"
				class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-20 rounded"
			/>
		</div>
	);
};
