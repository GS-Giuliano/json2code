/**
 * Module to parse JSON to CSV
 */

const RootParser = require("./_root.js");

class HtmlParser extends RootParser {
  constructor(options) {
    super(options);

    this.page = {
      top: "<!DOCTYPE html>\n<html>\n",
      titleBegin: "<title>",
      titleEnd: "</title>\n",
      headBegin: "<head>\n",
      headEnd: "</head>\n<body>\n",
      head: "<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n",
      begin: "",
      end: "",
      bottom: "</body>\n</html>"
    };
  }

  text(input) {
    return (this.toOutput(
      "<p" +
      this.toClass(this.classes.text) +
      ">" +
      this.toString(input.data) +
      "</p>")
    );
  }

  title(input) {
    return (this.toOutput(
      "<h1" +
      this.toClass(this.classes.title) +
      ">" +
      this.toString(input.data) +
      "</h1>")
    );
  }

  subTitle(input) {
    return (this.toOutput(
      "<h2" +
      this.toClass(this.classes.subTitle) +
      ">" +
      this.toString(input.data) +
      "</h2>")
    );
  }

  subTitle2(input) {
    return (this.toOutput(
      "<h3" +
      this.toClass(this.classes.subTitle2) +
      ">" +
      this.toString(input.data) +
      "</h3>")
    );
  }

  subTitle3(input) {
    return (this.toOutput(
      "<h4" +
      this.toClass(this.classes.subTitle3) +
      ">" +
      this.toString(input.data) +
      "</h4>")
    );
  }

  code(input) {
    return (this.toOutput(
      "<pre" +
      this.toClass(this.classes.code) +
      ">" +
      this.toString(input.data) +
      "</pre>")
    );
  }

  bold(input) {
    return (this.toOutput(
      "<strong" +
      this.classes.code +
      ">" +
      this.toString(input.data) +
      "</strong>")
    );
  }

  italic(input) {
    return (this.toOutput(
      "<u" +
      this.toClass(this.classes.code) +
      ">" +
      this.toString(input.data) +
      "</u>")
    );
  }

  underline(input) {
    return (this.toOutput(
      "<u" +
      this.toClass(this.classes.code) +
      ">" +
      this.toString(input.data) +
      "</u>")
    );
  }

  url(input) {
    let href = input.href ?? "";
    let target = input.target ?? "";
    let onClick = input.onClick ?? "";
    let onChange = input.onChange ?? "";

    if (href !== "") {
      href = ' href="' + href + '"';
    }
    if (target !== "") {
      target = ' target="' + target + '"';
    }
    if (onClick !== "") {
      onClick = ' onClick="' + onClick + '"';
    }
    if (onChange !== "") {
      onChange = ' onChange="' + onChange + '"';
    }

    return (this.toOutput(
      "<a" +
      this.toClass(this.classes.code) +
      href +
      target +
      onClick +
      onChange +
      ">" +
      this.toString(input.data) +
      "</a>")
    );
  }

  tag(input) {
    return (this.toOutput(
      "<span" +
      this.toClass(this.classes.tag, input.style) +
      ">" +
      this.toString(input.data) +
      "</span>")
    );
  }
}

module.exports = HtmlParser;
