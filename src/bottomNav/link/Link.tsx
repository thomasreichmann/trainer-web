import { NavLink } from 'react-router-dom';
import './Link.scss';

interface LinkProps {
	path: string;
	children: string;
}

const Link = (props: LinkProps) => {
	return (
		<NavLink to={props.path} activeClassName="active">
			{props.children}
		</NavLink>
	);
};

export default Link;
