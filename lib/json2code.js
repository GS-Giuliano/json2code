const fs = require("fs");
const { exit } = require("process");

function Json2code(options) {
  if (typeof options === "object") {
    if (typeof options.module === "string") {
      //const moduleFileName = __dirname + "/modules/" + options.module + ".js";
      const moduleFileName = "./modules/" + options.module + ".js";
      const moduleClass = require(moduleFileName);
      return new moduleClass(options);
    }
  }
}

exports = module.exports = Json2code;
