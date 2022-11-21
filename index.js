const express = require('express');
const app = express();
const port = 3001;
const api = '/api/v1/distance';
const DS100 = require("./data/DS100.json");

app.get(api, (req, res) => {
	res.send({"here": "result"});
})
app.get(api + '/:station1/:station2', (req, res) => {
	res.send({
		"from": `${DS100[req.params.station1]?.name}`,
		"to": `${DS100[req.params.station2]?.name}`,
		"distance":"in progress",
		"unit": "km"
	})
})
app.get('/*', (req, res) => {
	res.send(`wrong address! type localhost:${port}${api}`);
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
