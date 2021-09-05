import { NavLink } from 'react-router-dom';
import './Link.scss';

interface LinkProps {
	path: string;
	children: JSX.Element | JSX.Element[];
}

const Link = (props: LinkProps) => {
	return (
		<NavLink to={props.path} className="link ripple" activeClassName="active" exact>
			<span className="link-wrapper">{props.children}</span>
		</NavLink>
	);
};

export default Link;
