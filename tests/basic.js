const Json2frontend = require("../lib/json2frontend.js");

function test(moduleName) {
  console.log("==> Testing module [" + moduleName + "]");

  page = new Json2frontend({ useCDN: true, module: moduleName });
  console.log(page.text({ data: "Hello world!" }));
  console.log(page.title({ data: "Title!" }));
  console.log(page.subTitle({ data: "Sub-title!" }));
  console.log(page.code({ data: "Source code!" }));
  console.log();
}

test("html");
test("bootstrap");
test("bulma");
test("uikit");
