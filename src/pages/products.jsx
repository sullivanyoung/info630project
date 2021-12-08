import { Navbar } from '../components/navbar';
import { Product } from '../components/product';
import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export const ProductPage = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<Navbar count={count} />
			<h1 className="font-bold text-5xl py-10 font-mono mt-16 ml-12">
				Fresh Produce
			</h1>
			<Product
				products={fruit}
				currentCount={count}
				addProduct={setCount}
			></Product>
			<h1 className="font-bold text-5xl py-10 font-mono mt-16 ml-12">
				Snack Foods
			</h1>
			<Product
				products={snackFoods}
				currentCount={count}
				addProduct={setCount}
			></Product>
			<h1 className="font-bold text-5xl py-10 font-mono mt-16 ml-12">Dairy</h1>
			<Product
				products={dairy}
				currentCount={count}
				addProduct={setCount}
			></Product>
			<h1 className="font-bold text-5xl py-10 font-mono mt-16 ml-12">
				Frozen Foods
			</h1>
			<Product
				products={frozenFood}
				currentCount={count}
				addProduct={setCount}
			></Product>
		</>
	);
};

const dairy = [
	{
		itemID: '123456',
		name: 'Horizon Organic Sliced Cheese American, 8 Oz',
		price: '$4.69',
		img: 'https://horizon.com/wp-content/uploads/horizon-organic-american-cheese-slices-new.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 20,
	},
	{
		itemID: '654321',
		name: 'Earth Balance Original Buttery Spread',
		price: '$4.59',
		img: 'https://www.earthbalancenatural.com/sites/g/files/qyyrlu691/files/images/products/original-buttery-spread-05278.png',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 14,
	},
	{
		itemID: '830459',
		name: 'Chobani Greek Yogurt, 0%, Blueberry, 5.3 Oz',
		price: '$1.19',
		img: 'https://i5.walmartimages.com/asr/53dacc13-5334-4376-897a-d5fbb19396e6_1.af45f2790aa37db6f79031b09de1f167.jpeg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 12,
	},
	{
		itemID: '872437',
		name: 'Belgioiso, Parmesean, Grated, 5 oz',
		price: '$3.39',
		img: 'https://images.albertsons-media.com/is/image/ABS/960200388?$ecom-pdp-desktop$&defaultImage=Not_Available',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 27,
	},
	{
		itemID: '657169584',
		name: 'Good Food Brand - Happy Belly Shredded Mild Cheddar, 16 Oz',
		price: '$3.99',
		img: 'https://m.media-amazon.com/images/I/81NrV44kjDL._SY879_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 16,
	},
	{
		itemID: '652434321',
		name: 'Daisy, Regular Sour Cream, 8 Oz',
		price: '$1.30',
		img: 'https://images.heb.com/is/image/HEBGrocery/000314020',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 14,
	},
	{
		itemID: '2850978345',
		name: 'Good Food Brand - Happy Belly Sharp Cheddar Cheese Cracker Cut',
		price: '$3.35',
		img: 'https://m.media-amazon.com/images/I/71hPaZy5BTL._SL1500_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 34,
	},
];

const snackFoods = [
	{
		itemID: '123456',
		name: 'Lays Classic Potato Chips, 13 Oz',
		price: '$4.49',
		img: 'https://m.media-amazon.com/images/I/51mb1V2NArL._AC_SY250_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 20,
	},
	{
		itemID: '654321',
		name: 'Cheetos Crunchy, 15 Oz Party Size! Bag',
		price: '$4.79',
		img: 'https://m.media-amazon.com/images/I/51Ki5TtZK5L._AC_SY250_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 14,
	},
	{
		itemID: '830459',
		name: 'Fritos Scoops, Party Size!, 15.5 Oz',
		price: '$4.99',
		img: 'https://m.media-amazon.com/images/I/51255A5xAYL._AC_SY250_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 12,
	},
	{
		itemID: '872437',
		name: 'Lays Barbecue Flavored Potato Chips, 12.5 Oz',
		price: '$3.39',
		img: 'https://m.media-amazon.com/images/I/51UkBlaWPNL._AC_SY250_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 27,
	},
	{
		itemID: '657169584',
		name: 'SkinnyPop Original Popped Popcorn, 10 Oz',
		price: '$4.99',
		img: 'https://m.media-amazon.com/images/I/41ND3EZ2e7L._AC_SY250_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 16,
	},
	{
		itemID: '652434321',
		name: 'Doritos Tortilla Chips, Nacho Cheese, 14.5 Oz',
		price: '$4.79',
		img: 'https://m.media-amazon.com/images/I/51Cwa+hNA-L._AC_SY250_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 14,
	},
	{
		itemID: '2850978345',
		name: 'Pepperidge Farm Goldfish Cheddar Crackers, 6.6 Oz Bag',
		price: '$1.89',
		img: 'https://m.media-amazon.com/images/I/410MJl-ujOS._AC_SY250_.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 34,
	},
];

const fruit = [
	{
		itemID: '123456',
		name: 'Apples',
		price: '$0.99',
		img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_900,h_900,strp/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3JqYnZ4LWI1MDc4YmJmLTAzZmYtNDYyNS1iMjE0LTM1YzNmOWZlZmM0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Y0-7z3OBNt3CbKeZrPiWJFD-4LhVF7I9iC2wADeZEAU',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 20,
	},
	{
		itemID: '654321',
		name: 'Bananas',
		price: '$0.30',
		img: 'https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 14,
	},
	{
		itemID: '872437',
		name: 'Oranges',
		price: '$1.00',
		img: 'https://www.kroger.com/product/images/xlarge/front/0000000004012',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={3} />,
		inventory: 27,
	},
	{
		itemID: '652434321',
		name: 'Peaches',
		price: '$1.30',
		img: 'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/peach-with-half-and-leaves.jpg',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={4} />,
		inventory: 14,
	},
	{
		itemID: '8743452437',
		name: 'Grapes',
		price: '$1.00',
		img: 'https://www.kroger.com/product/images/xlarge/front/0000000004023',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={3} />,
		inventory: 27,
	},
];

const frozenFood = [
	{
		itemID: '830459',
		name: 'Lasagna',
		price: '$4.99',
		img: 'https://www.goodnes.com/sites/g/files/jgfbjl131/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/stouffers-fzjleuokzb74uwwi15sl.png.webp?itok=zQP4NbXG',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={2} />,
		inventory: 12,
	},
	{
		itemID: '2850978345',
		name: 'Pizza',
		price: '$6.30',
		img: 'https://i5.walmartimages.com/asr/94f8eec3-a197-4bbb-9305-85cea4a43665.5631c100b474672cdfdd2e21b9a514ed.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 34,
	},
	{
		itemID: '657169584',
		name: 'Chicken',
		price: '$5.00',
		img: 'https://i5.walmartimages.com/asr/498cb192-6d11-4656-8275-07ee0ead7aa4.9dccf567afa9be5d79ab824c376b5865.png',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={1} />,
		inventory: 16,
	},
];
