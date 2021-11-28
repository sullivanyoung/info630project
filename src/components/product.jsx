import { ActionButton } from './actionButton';

export const Product = ({ children, products }) => {
	return (
		<div className="my-10">
			<h1 className="font-bold text-4xl underline text-center my-5">
				{children}
			</h1>
			<div className="flex justify-around">
				{products.map((prod) => (
					<div className="text-center mx-5 border-solid border-2 border-gray-100 p-4 rounded-lg">
						<h1 className="justify-center font-bold">{prod.name}</h1>
						<img
							src={prod.img}
							className="h-52 w-55 justify-center"
							alt={prod.name}
						/>
						<h2 className="py-2">{prod.price}</h2>
						<ActionButton productId={prod.productId} />
					</div>
				))}
			</div>
		</div>
	);
};
