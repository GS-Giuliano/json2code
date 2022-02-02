const fs = require("fs");

function Json2frontend(options) {
  if (typeof options === "object") {
    if (typeof options.module === "string") {
      const moduleFileName = "./modules/" + options.module + ".js";
      const moduleClass = require(moduleFileName);
      return new moduleClass(options);
    }
  }
}

exports = module.exports = Json2frontend;
