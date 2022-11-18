import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const options = {
	indexAxis: "y" as const,

	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "President",
		},
	},
};

const labels = ["Race for office of the President"];

const url: string = "https://nycnvoter.herokuapp.com";

const VerticalBar = () => {
	const [presy, setPresy] = React.useState([]);
	const getUser = async () => {
		const newURL = `${url}/api/president/view`;
		await axios.get(newURL).then((res) => {
			setPresy(res.data.data);
			console.log("this is presy", presy);
		});
	};

	let voteData = presy.forEach((el) => console.log(el));

	useEffect(() => {
		getUser();
	}, []);

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: [200, -100, -323, 522, -437, 299, 90],
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	return (
		<div>
			<Bar options={options} data={data} />
		</div>
	);
};

export default VerticalBar;
