export const ActionButton = ({ currentCount, addProduct }) => {
	return (
		<button
			className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-20 rounded"
			onClick={() => addProduct(currentCount + 1)}
		>
			Add To Cart
		</button>
	);
};
