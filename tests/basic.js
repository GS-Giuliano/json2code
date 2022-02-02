const Json2code = require("../lib/json2code.js");

function test(moduleName) {
  console.log("==> Testing module [" + moduleName + "]");

  j2c = new Json2code({ useCDN: true, module: moduleName });
  console.log(j2c.text({ data: "Hello world!" }));
  console.log(j2c.title({ data: "Title!" }));
  console.log(j2c.subTitle({ data: "Sub-title!" }));
  console.log(j2c.code({ data: "Source code!" }));
  console.log(
    j2c.url({
      data: "Hello world!",
      href: "https://google.com",
      target: "_new",
    })
  );
  console.log(j2c.tag({ data: "Tag 1" }));
  console.log(j2c.tag({ data: "Tag 1", style: j2c.styles.primary }));
  console.log();
}

test("html");
test("bulma");
test("uikit");
