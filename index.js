const http = require('http');
const https = require('https');

const server = http.createServer();
server.on('request', (request, response) => {
	if (request.url.includes("?startDate=") && request.url.includes("&endDate=") && request.url.length == 41) {
		let startDate = Date.parse(request.url.substring(12, 22) + "T00:00:00.000Z");
		let endDate = Date.parse(request.url.substring(31) + "T00:00:00.000Z");
		let obj = JSON.parse(latestData);
		let eventsCount = obj["events"].length;

		if (isNaN(startDate) || isNaN(endDate)) {
			console.log("Invalid date format provided!");
			response.end(latestData);
			return;
		}

		let modifiedObject = JSON.parse(latestData);
		modifiedObject["events"] = [];

		if (eventsCount > 0) {
			for (let i = 0; i < eventsCount; i++) {
				let date = Date.parse(obj["events"][i]["start_dt"]);
				if (date > startDate && date < endDate) {
					modifiedObject["events"].push(obj["events"][i]);
				}
			}

			response.end(JSON.stringify(modifiedObject));
		}
		else {
			response.end(latestData);
		}
	}
	else {
		response.end(latestData);
	}
});

var latestData;
const timeoutObj = setInterval(getCalendarData, 1800000);

// If it's 2030 and this is still running, you may need to edit the value below to 2040!
const options = {
	protocol: 'https:',
    hostname: 'api.teamup.com',
    path: '/ksmodd71v522312r4w/events?startDate=2023-01-11&endDate=2030-01-01',
    headers: {
        'Teamup-Token': 'a67da8848a4b97c7cf6aea801f284148ea397c2821fe40913299d9c755ddd9f1'
    }
}

function getCalendarData () {
	https.get(options, res => {
		let data = [];
		if (res.statusCode != 200) {
			console.log('Status Code:', res.statusCode);
		}

		res.on('data', chunk => {
			data.push(chunk);
		});

		res.on('end', () => {
			//console.log('Got latest data: ' + Buffer.concat(data).toString());
			latestData = Buffer.concat(data).toString();
			//const users = JSON.parse(Buffer.concat(data).toString());
		});
	}).on('error', err => {
		console.log('Error: ', err.message);
	});
}

getCalendarData();

server.listen(11498, () => {
	console.log(`Server is running on port 11498!`);
});