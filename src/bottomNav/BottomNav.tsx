import './BottomNav.scss';
import Link from './link/Link';
import { MdHome, MdPerson, MdShowChart } from 'react-icons/md';

export interface BottomNavProps {
	activeRoute?: string;
}

const BottomNav = (props: BottomNavProps) => {
	return (
		<nav className="navbar">
			<Link path="/profile">
				<MdPerson />
				<span>Profile</span>
			</Link>
			<Link path="/">
				<MdHome />
				<span>Home</span>
			</Link>
			<Link path="/list">
				<MdShowChart />
				<span>List</span>
			</Link>
		</nav>
	);
};

export default BottomNav;
