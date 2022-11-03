const csvtojson = require("csvtojson");
const json2csv = require("json2csv").parse;
const crypto = require("crypto");

const fs = require("fs");

csvtojson()
  .fromFile("Naming - Team Engine.csv")
  .then((sourcefile) => {
    for (let i = 0; i < sourcefile.length; i++) {
      const hash = crypto
        .createHash("sha256")
        .update(i.toString())
        .digest("hex");
      sourcefile[i].HASH = hash;
    }
    const output = JSON.stringify(sourcefile);

    fs.writeFileSync("./nftTeamEngine.json", output);

    console.log(sourcefile);
    const csv = json2csv(sourcefile, {
      fields: ["Series Number", "FILE NAME", "UUID", "Description", "HASH"],
    });
    fs.writeFileSync("./finalnft.output.csv", csv);
  });
