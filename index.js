const express = require('express');
const app = express();
const port = 3000;
const api = '/api/v1/distance';
const DS100 = require("./data/DS100.json");

app.get(api, (req, res) => {
	res.send(`{°O.o°}`);
})
app.get(api + '/:station1/:station2', (req, res) => {
	const station1 = req.params.station1;
	const station2 = req.params.station2;
	res.send([DS100[station1], DS100[station2]]);
})
app.get('/*', (req, res) => {
	res.send(`wrong address! type localhost:${port}${api}`);
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
