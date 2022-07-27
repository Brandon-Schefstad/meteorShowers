const { request, response } = require('express');
const express = require('express');
require('dotenv').config();
const app = express();
// app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 8000;
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
let db,
	dbConnectionStr = `mongodb+srv://herokulogin:DQjmKN5PMzpUJW3@cluster0.jbffj5r.mongodb.net/?retryWrites=true&w=majority`;
dbName = 'meteor-showers';
console.log(dbConnectionStr);
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
	(client) => {
		console.log(`Connected to ${dbName} Database`);
		db = client.db(dbName);
	}
);
app.get('/', (request, response) => {
	response.render('index.html');
});
app.get('/dev', (request, response) => {
	db.collection('meteor-showers')
		.find()
		.toArray()
		.then((data) => {
			response.render('index.ejs', { info: data });
		});
});
app.get('/api', (request, response) => {
	db.collection('meteor-showers')
		.find()
		.toArray()
		.then((data) => {
			response.json(data);
		});
});

app.delete('/deleteShower', (request, response) => {
	console.log(`Shower to be deleted: ${request.body.name}`);
	db.collection('meteor-showers')
		.deleteOne({ name: request.body.name })
		.then((result) => {
			console.log('Finished');
			response.json('Shower Deleted');
		})
		.catch((error) => console.error(error));
});

app.get('/api/:name', (request, response) => {
	const showerName = request.params.name.toLowerCase();
	db.collection('meteor-showers')
		.find({ showerName })
		.toArray()
		.then((data) => {
			response.json(data);
		});
});
app.listen(process.env.PORT || PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

app.post('/addShower', (request, response) => {
	db.collection('meteor-showers')
		.insertOne({
			name: request.body.name,
			startDate: request.body.startDate,
			endDate: request.body.endDate,
			peakDate: request.body.peakDate,
			startMonthInt: request.body.startMonthInt,
			startDayInt: request.body.startDayInt,
			endMonthInt: request.body.endMonthInt,
			endDayInt: request.body.endDayInt,
			peakMonthInt: request.body.peakMonthInt,
			peakDayInt: request.body.peakDayInt,
			speed: request.body.speed,
			zhr: request.body.zhr,
			rating: request.body.rating,
			parentBody: request.body.parentBody,
		})
		.then((result) => {
			console.log('Shower Added');
			response.redirect('/dev');
		});
});
