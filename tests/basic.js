const Json2code = require("../lib/json2code.js");

function test(moduleName) {
  console.log("==> Testing module [" + moduleName + "]");

  page = new Json2code({ useCDN: true, module: moduleName });
  console.log(page.text({ data: "Hello world!" }));
  console.log(page.title({ data: "Title!" }));
  console.log(page.subTitle({ data: "Sub-title!" }));
  console.log(page.code({ data: "Source code!" }));
  console.log(
    page.url({
      data: "Hello world!",
      href: "https://google.com",
      target: "_new",
    })
  );
  console.log(page.tag({ data: "Tag 1" }));
  console.log(page.tag({ data: "Tag 1", style: page.styles.primary }));
  console.log();
}

test("html");
test("bootstrap");
test("bulma");
test("uikit");
