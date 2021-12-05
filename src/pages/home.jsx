import { Navbar } from '../components/navbar';
import { Product } from '../components/product';
import { useState } from 'react';
import Banner from '../images/home-banner.png';
import StarRatingComponent from 'react-star-rating-component';

export const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar count={count} />
			<img
				src={Banner}
				alt="logo"
				className="ml-auto mr-auto rounded-md w-3/5"
			/>
			<h1 className="font-bold text-5xl font-mono mt-16 ml-12">
				Exclusive Offer
			</h1>
			<Product
				products={fruit}
				currentCount={count}
				addProduct={setCount}
			></Product>
			<h1 className="font-bold text-5xl py-10 font-mono mt-16 ml-12">
				Best Selling
			</h1>
			<Product
				products={frozenFood}
				currentCount={count}
				addProduct={setCount}
			></Product>
		</>
	);
};

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
		itemID: '830459',
		name: 'Lasagna',
		price: '$4.99',
		img: 'https://www.goodnes.com/sites/g/files/jgfbjl131/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/stouffers-fzjleuokzb74uwwi15sl.png.webp?itok=zQP4NbXG',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={2} />,
		inventory: 12,
	},
	{
		itemID: '872437',
		name: 'Oragnes',
		price: '$1.00',
		img: 'https://www.kroger.com/product/images/xlarge/front/0000000004012',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={3} />,
		inventory: 27,
	},
	{
		itemID: '657169584',
		name: 'Chicken',
		price: '$5.00',
		img: 'https://i5.walmartimages.com/asr/498cb192-6d11-4656-8275-07ee0ead7aa4.9dccf567afa9be5d79ab824c376b5865.png',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={1} />,
		inventory: 16,
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
		itemID: '2850978345',
		name: 'Pizza',
		price: '$6.30',
		img: 'https://i5.walmartimages.com/asr/94f8eec3-a197-4bbb-9305-85cea4a43665.5631c100b474672cdfdd2e21b9a514ed.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={5} />,
		inventory: 34,
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
		itemID: '8743452437',
		name: 'Grapes',
		price: '$1.00',
		img: 'https://www.kroger.com/product/images/xlarge/front/0000000004023',
		starRating: <StarRatingComponent name="rate1" starCount={5} value={3} />,
		inventory: 27,
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
