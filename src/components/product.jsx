import { ActionButton } from './actionButton';

export const Product = ({ children, products, currentCount, addProduct }) => {
	return (
		<div className="my-10">
			<div className="flex justify-around">
				{products.map((prod) => (
					<div className="text-center mx-2 p-4 rounded-lg">
						<img
							src={prod.img}
							className="h-52 w-55 justify-center"
							alt={prod.name}
						/>
						<h2 className="py-2">{prod.price}</h2>
						{prod.starRating}
						<h1 className="justify-center font-bold pb-2">{prod.name}</h1>
						<ActionButton
							productId={prod.productId}
							currentCount={currentCount}
							addProduct={addProduct}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
