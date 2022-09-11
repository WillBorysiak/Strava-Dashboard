export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		tooltip: {
			displayColors: false,
			bodyColor: '#e4e4e7',
		},
		legend: {
			labels: {
				color: '#e4e4e7',
				boxWidth: 10,
				boxHeight: 10,
				font: {
					size: 20,
				},
			},
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
				color: '#e4e4e7',
			},
			ticks: {
				color: '#e4e4e7',
				font: {
					family: 'Oswald',
					size: 20,
				},
			},
		},
		y: {
			ticks: {
				color: '#e4e4e7',
				font: {
					family: 'Oswald',
					size: 20,
				},
			},
		},
	},
};
