const csvtojson = require("csvtojson");
const json2csv = require("json2csv").parse;
const crypto = require("crypto");

const fs = require("fs");
const filePath = process.argv[1] || "Naming - Team Engine.csv";

csvtojson()
  .fromFile(filePath)
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
    fs.writeFileSync(`${filePath.split(".")[0]}.output.csv`, csv);
    console.log(`output generated successfully`);
  });
