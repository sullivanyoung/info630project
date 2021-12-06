export const ActionButton = ({ currentCount, addProduct }) => {
	return (
		<button
			className="bg-gradient-to-r from-green-300 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-10 whitespace-nowrap	"
			onClick={() => addProduct(currentCount + 1)}
		>
			Add to Cart
		</button>
	);
};
