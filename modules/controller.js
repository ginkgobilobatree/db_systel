const express = require("express");
const router = express.Router();
const port = process.env.PORT || 3001;
const DS100 = require("../data/DS100.json");

const Middleware = require("./middleware");

const endpoint = "/api/v1/distance";

const invalidInput = {
  from: "invalid input",
  to: "invalid input",
  distance: "invalid input",
  unit: "invalid input",
};


router.get(endpoint, (req, res) => {
  res.send({ "this test": "is working :-)" });
});

router.get(endpoint + "/:station1/:station2", (req, res) => {
  const stat1 = req.params.station1;
  const stat2 = req.params.station2;

  if (!(stat1 in DS100) || !(stat2 in DS100 || stat1.length === 0 || stat2.length === 0))
    res.send(invalidInput);

  const [lat1, lat2, long1, long2] = [
    DS100[stat1].lat,
    DS100[stat2].lat,
    DS100[stat1].long,
    DS100[stat2].long,
  ].map((elem) => Number(elem));

  const distance = Middleware(lat1, lat2, long1, long2);

  res.send({
    from: DS100[stat1].name,
    to: DS100[stat2].name,
    distance: distance,
    unit: "km",
  });
});

router.get(endpoint + "/*", (req, res) => {
  res.send(invalidInput);
});

router.get("/*", (req, res) => {
  res.send("try 'localhost:3000/api/v1/distance'");
});


module.exports = router;
