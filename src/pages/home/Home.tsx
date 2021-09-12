import { Line } from 'react-chartjs-2';

const data = {
	labels: ['1', '2', '3', '4', '5', '6'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			fill: false,
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgba(255, 99, 132, 0.2)',
		},
	],
};

const Home = () => {
	return (
		<div>
			<Line data={data}></Line>
		</div>
	);
};
export default Home;
