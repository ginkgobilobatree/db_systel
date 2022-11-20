const express = require('express');
const app = express();
const port = 3000;
const api = '/api/v1/distance';

app.get(api, (req, res) => {
	res.send(`{°O.o°}`);
})
app.get('/*', (req, res) => {
	res.send(`wrong address! type localhost:${port}${api}`);
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
