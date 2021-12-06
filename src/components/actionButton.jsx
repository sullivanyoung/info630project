export const ActionButton = ({ currentCount, addProduct }) => {
	return (
		<button
			className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded whitespace-nowrap	"
			onClick={() => addProduct(currentCount + 1)}
		>
			Add to Cart
		</button>
	);
};
