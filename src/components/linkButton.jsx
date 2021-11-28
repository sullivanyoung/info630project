import { Link } from 'react-router-dom';

export const Button = (props) => {
	return (
		<Link to={props.location} className={props.class}>
			{props.name}
		</Link>
	);
};
