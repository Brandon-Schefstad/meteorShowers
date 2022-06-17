const { request } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());
// const showers = require('./showers');

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
	const showerName = request.params.name.toLowerCase();
	console.log(showers[showerName]);
	if (showers[showerName]) {
		console.log(request.params.name);
		response.json(showers[showerName]);
	} else {
		console.log(`Did Not Work: ${request.params.name}`);
		response.json(showers['template']);
	}
});
app.listen(process.env.PORT || PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

app.get('/api', (request, response) => {
	response.json(showers);
});

const showers = {
	quadrantids: {
		name: 'Quadrantids',
		startDate: 'December 28',
		endDate: 'January 12',
		peakDate: 'January 3',
		startMonthInt: 12,
		startDayInt: 28,
		endMonthInt: 1,
		endDayInt: 12,
		peakMonthInt: 1,
		peakDayInt: 3,
		speed: 41,
		zhr: 110,
		rating: 'bright',
		parentBody: '(196256) 2003 EH1',
	},
	'alpha centaurids': {
		name: 'Alpha Centaurids',
		startDate: 'January 31',
		endDate: 'February 20',
		peakDate: 'February 8',
		startMonthInt: 1,
		startDayInt: 31,
		endMonthInt: 2,
		endDayInt: 20,
		peakMonthInt: 2,
		peakDayInt: 8,
		speed: 58,
		zhr: 6,
		rating: 'bright',
		parentBody: 'undiscovered',
	},
	'gamma normids': {
		startDate: 'February 25',
		endDate: 'March 28',
		peakDate: 'March 14',
		startMonthInt: 2,
		startDayInt: 25,
		endMonthInt: 3,
		endDayInt: 28,
		peakMonthInt: 3,
		peakDayInt: 14,
		speed: 56,
		zhr: 6,
		rating: 'nrogjt',
		parentBody: 'C/1864 R1 (Donati) or C/1893 U1 (Brooks) ',
	},
	template: {
		startDate: null,
		endDate: null,
		peakDate: null,
		startMonthInt: null,
		startDayInt: null,
		endMonthInt: null,
		endDayInt: null,
		speed: null,
		zhr: null,
		rating: null,
		parentBody: null,
	},
};
