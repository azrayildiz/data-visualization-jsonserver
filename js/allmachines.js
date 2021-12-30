//js for allmachines.html
const container = document.querySelector('.datas')

//make a request -- send a get request to endpoint
const fetchEventsJSON = async () => {
	const res = await fetch('http://localhost:3000/events')
	const events = await res.json()
	return events
}

let template = ''
let machineName1 = []
let machineName2 = []
let machineName3 = []
let machineName4 = []
let machineName5 = []
fetchEventsJSON().then((events) => {
	events.map((datas) => {
		if (datas.machine_name === 'machine-1') {
			machineName1.push(datas)
		} else if (datas.machine_name === 'machine-2') {
			machineName2.push(datas)
		} else if (datas.machine_name === 'machine-3') {
			machineName3.push(datas)
		} else if (datas.machine_name === 'machine-4') {
			machineName4.push(datas)
		} else {
			machineName5.push(datas)
		}
	})
	//machineName1
	const timestamp1 = machineName1.map((item) => {
		return item.timestamp
	})
	console.log(timestamp1)
	const machineId = machineName1.map((item) => {
		return item.machine_id
	})
	console.log(machineId)
	const machineName = machineName1.map((item) => {
		return item.machine_name
	})
	console.log(machineName)
	const temperature = machineName1.map((item) => {
		return item.temperature
	})
	console.log(temperature)

	//machineName2
	// const timestamp1 = machineName1.map((item) => {
	// 	return item.timestamp
	// })
	// console.log(timestamp1)
	// const machineId = machineName1.map((item) => {
	// 	return item.machine_id
	// })
	// console.log(machineId)
	// const machineName = machineName1.map((item) => {
	// 	return item.machine_name
	// })
	// console.log(machineName)
	// const temperature = machineName1.map((item) => {
	// 	return item.temperature
	// })
	// console.log(temperature)

	//machineName3
	// const timestamp1 = machineName1.map((item) => {
	// 	return item.timestamp
	// })
	// console.log(timestamp1)
	// const machineId = machineName1.map((item) => {
	// 	return item.machine_id
	// })
	// console.log(machineId)
	// const machineName = machineName1.map((item) => {
	// 	return item.machine_name
	// })
	// console.log(machineName)
	// const temperature = machineName1.map((item) => {
	// 	return item.temperature
	// })
	// console.log(temperature)

	const canvas = document.getElementById('canvas')
	const ctx = canvas.getContext('2d')
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: timestamp1,
			datasets: [
				{
					label: 'Machine 1',
					data: temperature,
					backgroundColor: 'transparent',
					borderColor: 'red',
					borderWidth: 4,
				},
			],
		},
		data: {
			labels: timestamp1,
			datasets: [
				{
					label: 'Machine 2',
					data: temperature,
					backgroundColor: 'transparent',
					borderColor: 'red',
					borderWidth: 4,
				},
			],
		},
		data: {
			labels: timestamp1,
			datasets: [
				{
					label: 'Machine 3',
					data: temperature,
					backgroundColor: 'transparent',
					borderColor: 'blue',
					borderWidth: 4,
				},
			],
		},
		data: {
			labels: timestamp1,
			datasets: [
				{
					label: 'Machine 4',
					data: temperature,
					backgroundColor: 'transparent',
					borderColor: 'green',
					borderWidth: 4,
				},
			],
		},
		data: {
			labels: timestamp1,
			datasets: [
				{
					label: 'Machine 1',
					data: temperature,
					backgroundColor: 'transparent',
					borderColor: 'yellow',
					borderWidth: 4,
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
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
			},
		},
	})
})

// events.forEach((datas) => {
// 	template += `
//   <div class="datas">
//     <h2>${datas.machine_name}</h2>
//     <p>Date: ${datas.timestamp} Temperature: ${datas.temperature} </p>
//     <p>${datas.machine_id.slice(0, 300)}</p>

//     <a href="/machines.html?machine_id=${datas.machine_id}> More details for the individual Machines</a>
//   </div>`
// })

// container.innerHTML = template

//post and render them to the page --- invoking a render post function
window.addEventListener('DOMContetntLoaded', () => renderPosts())
