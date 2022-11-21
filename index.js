const express = require("express");
const app = express();
const port = 3001;
const api = "/api/v1/distance";
const DS100 = require("./data/DS100.json");
const calcDistance = require("./utils/calcDistance");

app.get(api, (req, res) => {
  res.send({ "this is ": "a test" });
});
app.get(api + "/:station1/:station2", (req, res) => {
  const stat1 = req.params.station1;
  const stat2 = req.params.station2;
  const [lat1, lat2, lang1, lang2] = [
    DS100[stat1].lat,
    DS100[stat2].lat,
    DS100[stat1].lang,
    DS100[stat2].lang,
  ].map((elem) => Number(elem));
  const distance = calcDistance(lat1, lat2, lang1, lang2);

  res.send({
    from: DS100[stat1]?.name,
    to: DS100[stat2]?.name,
    distance: distance,
    unit: "km",
  });
});
app.get("/*", (req, res) => {
  res.send(`wrong address! type localhost:${port}${api}`);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
