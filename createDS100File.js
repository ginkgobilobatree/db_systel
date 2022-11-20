const fs = require("fs");
const { parse } = require("csv-parse");

const DS100 = {};

let num = 0;
fs.createReadStream("./files/D_Bahnhof_2020_alle.csv")
  .pipe(parse({ delimiter: ";", from_line: 2 }))
  .on("data", function (row) {
    if (row[4] === "FV") {
      num += 1;
      DS100[row[1]] = {
        lang: row[5],
        lat: row[6],
        name: row[3],
      };
    }
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    const data = JSON.stringify(DS100)
    fs.writeFileSync("DS100.json", data);
    console.log(data)
    console.log("it's done");
  });
