getChart()

async function getChart() {
	const data = await getData()
	console.log(data)

	const ctx = document.getElementById('chart').getContext('2d')

	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: data.timestamp_1,
			datasets: [
				{
					label: 'Machine 1',
					labels: data.timestamp_1,
					data: data.temperature_1,
					backgroundColor: 'transparent',
					borderColor: 'maroon',
					borderWidth: 2,
				},
				{
					label: 'Machine 2',
					labels: data.timestamp_2,
					data: data.temperature_2,
					backgroundColor: 'transparent',
					borderColor: 'green',
					borderWidth: 2,
				},
				{
					label: 'Machine 3',
					data: data.temperature_3,
					backgroundColor: 'transparent',
					borderColor: 'blue',
					borderWidth: 2,
				},
				{
					label: 'Machine 4',
					data: data.temperature_4,
					backgroundColor: 'transparent',
					borderColor: 'orange',
					borderWidth: 2,
				},
				{
					label: 'Machine 5',
					data: data.temperature_5,
					backgroundColor: 'transparent',
					borderColor: 'purple',
					borderWidth: 2,
				},
			],
		},

		options: {
			elements: {
				line: {
					tension: 0,
				},
				scales: {
					yAxes: [
						{
							// callback function
							ticks: {
								beginAtZero: true,
								callback: function (value, index, values) {
									return index + 'grad'
								},
							},
						},
					],
				},
			},
		},
	})
}

async function getData() {
	let machine_1 = []
	let machine_2 = []
	let machine_3 = []
	let machine_4 = []
	let machine_5 = []
	let criticalTemperate = []

	const response = await fetch('http://localhost:3000/events')

	const data = await response.json()

	data.map((datas) => {
		if (datas.machine_name === 'machine-1') {
			machine_1.push(datas)
		} else if (datas.machine_name === 'machine-2') {
			machine_2.push(datas)
		} else if (datas.machine_name === 'machine-3') {
			machine_3.push(datas)
		} else if (datas.machine_name === 'machine-4') {
			machine_4.push(datas)
		} else {
			machine_5.push(datas)
		}
	})

	// const groups = machine_1.reduce((acc, m) => {
	// 	// create a composed key: 'year-week'
	// 	const yearWeek = `${moment(m.timestamp).year()}-${moment(m.timestamp).week()}`

	// 	// add this key as a property to the result object
	// 	if (!acc[yearWeek]) {
	// 		acc[yearWeek] = []
	// 	}

	// 	// push the current date that belongs to the year-week calculated befor
	// 	acc[yearWeek].push(m)

	// 	return acc
	// }, {})

	// console.log(groups)

	machine_1 = machine_1.sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
	machine_2 = machine_2.sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
	machine_3 = machine_3.sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
	machine_4 = machine_4.sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
	machine_5 = machine_5.sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))

	//machine-1
	const timestamp_1 = machine_1.map((item) => {
		return item.timestamp
	})
	const temperature_1 = machine_1.map((item) => {
		return item.temperature
	})

	//machine-2
	const timestamp_2 = machine_2.map((item) => {
		return item.timestamp
	})
	const temperature_2 = machine_2.map((item) => {
		return item.temperature
	})

	//machine-3
	const timestamp_3 = machine_3.map((item) => {
		return item.timestamp
	})

	const temperature_3 = machine_3.map((item) => {
		return item.temperature
	})

	//machine-4
	const timestamp_4 = machine_4.map((item) => {
		return item.timestamp
	})

	const temperature_4 = machine_4.map((item) => {
		return item.temperature
	})

	//machine-5
	const timestamp_5 = machine_5.map((item) => {
		return item.timestamp
	})
	const temperature_5 = machine_5.map((item) => {
		return item.temperature
	})
	//critical temperatures
	const timestamp_90 = criticalTemperate.map((item) => {
		return item.timestamp
	})
	const temperature_90 = criticalTemperate.map((item) => {
		return item.temperature
	})

	return {
		timestamp_1,
		temperature_1,
		timestamp_2,
		temperature_2,
		timestamp_3,
		temperature_3,
		timestamp_4,
		temperature_4,
		timestamp_5,
		temperature_5,
		timestamp_90,
		temperature_90,
	}
}
