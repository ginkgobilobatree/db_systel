const express = require('express');
const app = express();
const port = 3000;
app.get('/api/v1/distance', (req, res) => {
	res.send(`{°O.o°}`);
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
