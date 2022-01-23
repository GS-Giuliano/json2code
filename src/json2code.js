const fs = require("fs");
const { exit } = require("process");

class Json2code {
  constructor(options) {
    if (typeof options === "object") {
      if (typeof options.module === "string") {
        const moduleFileName = __dirname + "/modules/" + options.module + ".js";
        const moduleClass = require(moduleFileName);
        this.$ = new moduleClass(options);
      }
    }
  }
}

module.exports = Json2code;
