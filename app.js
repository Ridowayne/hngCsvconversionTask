const csvtojson = require("csvtojson");
const json2csv = require("json2csv").parse;
const crypto = require("crypto");

const fs = require("fs");
const filePath = process.argv[1] || "HNGi9CSVFILE";

csvtojson()
  .fromFile("Your file path")
  .then((sourcefile) => {
    for (let i = 0; i < sourcefile.length; i++) {
      const hash = crypto
        .createHash("sha256")
        .update(i.toString())
        .digest("hex");
      sourcefile[i].Hash = hash;
      sourcefile[i].format = "CHIP-0007";
    }
    // const output = JSON.stringify(sourcefile);

    // fs.writeFileSync("./nftAllTeams.json", output);

    console.log(sourcefile);
    const csv = json2csv(sourcefile, {
      fields: [
        "format",
        "TEAM NAMES",
        "Series Number",
        "Filename",
        "Name",
        "Description",
        "Gender",
        "Attributes",
        "UUID",
        "Hash",
      ],
    });
    fs.writeFileSync(`The-new csv-file.output.csv`, csv);
    console.log(`output generated successfully`);
  });
