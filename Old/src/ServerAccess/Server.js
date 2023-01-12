import axios from 'axios'

async function GetEvents() {
	var e
	var error
	await axios
		.get('http://158.69.25.178:11498/')
		.then((events) => {
			e = events.data.events
		})
		.catch((err) => {
			error = err.code + ": " + err.message
		})
	if (error) throw new error(error) 
	else return e
}

export default {
	GetEvents,
}
