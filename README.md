# json2frontend

Transform JSON to front-end code (html, bootstrap, bulma, uikit, skeleton, e.g.)

## Installation

Install my-project with npm

```bash
  npm install json2frontend
```

## Usage/Examples

### Nodejs example

```javascript
const Json2frontend = require("../lib/json2frontend.js");

function test(moduleName) {
  console.log("==> Testing module [" + moduleName + "]");

  page = new Json2code({ useCDN: true, module: moduleName });
  console.log(page.title({ data: "Title!" }));
  console.log(page.subTitle({ data: "Sub-title!" }));
  console.log(page.bold({ data: "Hello world!" }));
  console.log();
}

test("html");
test("bootstrap");
test("bulma");
test("uikit");

```

### Nodejs server example

```javascript
const express = require("express");
const json2frontend = require("json2frontend");
const app = express();
const page = new json2frontend({
  useCDN: true,
  module: "bootstrap",
  version: "last",
});

app.get("/", function (req, res) {
  page.top({ title: "Page title" });
  page.begin();
  page.title({ data: "Page title" });
  page.subTitle({ data: "Page sub-title" });
  page.filter({ data: "Page sub-title" });
  page.text({
    data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });
  page.bold({ data: "bold text " });
  page.italic({ data: "italic text " });
  page.underline({ data: "underline text " });
  page.end();
  page.bottom();
  res.send(page.output);
});

app.listen(3000, "0.0.0.0", function () {
  console.log("Started!");
});
```

## API Reference

### top

Output required code like <HTML> and <HEAD> tags. Usage:

```javascript
top({ useCDN: [true / false], module: [moduleName] });
```

| Parameter | Type      | Description                        |
| :-------- | :-------- | :--------------------------------- |
| `useCDN`  | `boolean` | Use CDN or output JS code directly |
| `module`  | `string`  | Main module for code output        |

Modules:

| Module      | Usage for | URL                                 |
| :---------- | :-------- | :---------------------------------- |
| `html`      | `web`     | Flat HTML                           |
| `skeleton`  | `web`     | [Website](http://getskeleton.com)   |
| `bootstrap` | `web`     | [Website](https://getbootstrap.com) |
| `bulma`     | `web`     | [Website](https://bulma.io)         |
| `uikit`     | `web`     | [Website](https://getuikit.com)     |

### begin

Output required code for... Usage:

```javascript
begin();
```

### end

Output required code for... Usage:

```javascript
end();
```

## Authors

- [Giuliano Nascimento](https://www.github.com/GS-Giuliano)

## License

[Apache](https://choosealicense.com/licenses/apache-2.0/)
