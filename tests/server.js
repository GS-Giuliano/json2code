const express = require("express");
const json2frontend = require("../lib/json2frontend.js");

const app = express();

app.get("/", function (req, res) {

  const o = new json2frontend({ useCDN: true, module: "skeleton", version: "last" });
  o.top({ title: "Page title" });
  //o.css();
  o.begin();
  o.title({ data: "Page title" });
  o.subTitle({ data: "Page sub-title" });
  o.filter({ data: "Page sub-title" });
  o.text({
    data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });
  o.bold({ data: "bold text " });
  o.italic({ data: "italic text " });
  o.underline({ data: "underline text " });
  //o.js();
  o.end();

  o.bottom();

  res.send(o.output);
});

app.listen(3000, "0.0.0.0", function () {
  console.log("Started!");
});
