/**
 * Module to parse JSON to CSV
 */

const RootParser = require("./_root.js");

class HtmlParser extends RootParser {
  constructor(options) {
    super(options);
  }

  text(input) {
    return (
      "<p" +
      this.toClass(this.classes.text) +
      ">" +
      this.toString(input.data) +
      "</p>"
    );
  }

  title(input) {
    return (
      "<h1" +
      this.toClass(this.classes.title) +
      ">" +
      this.toString(input.data) +
      "</h1>"
    );
  }

  subTitle(input) {
    return (
      "<h2" +
      this.toClass(this.classes.subTitle) +
      ">" +
      this.toString(input.data) +
      "</h2>"
    );
  }

  subTitle2(input) {
    return (
      "<h3" +
      this.toClass(this.classes.subTitle2) +
      ">" +
      this.toString(input.data) +
      "</h3>"
    );
  }

  subTitle3(input) {
    return (
      "<h4" +
      this.toClass(this.classes.subTitle3) +
      ">" +
      this.toString(input.data) +
      "</h4>"
    );
  }

  code(input) {
    return (
      "<pre" +
      this.toClass(this.classes.code) +
      ">" +
      this.toString(input.data) +
      "</pre>"
    );
  }

  bold(input) {
    return (
      "<strong" +
      this.classes.code +
      ">" +
      this.toString(input.data) +
      "</strong>"
    );
  }

  italic(input) {
    return (
      "<u" +
      this.toClass(this.classes.code) +
      ">" +
      this.toString(input.data) +
      "</u>"
    );
  }

  underline(input) {
    return (
      "<u" +
      this.toClass(this.classes.code) +
      ">" +
      this.toString(input.data) +
      "</u>"
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

    return (
      "<a" +
      this.toClass(this.classes.code) +
      href +
      target +
      onClick +
      onChange +
      ">" +
      this.toString(input.data) +
      "</a>"
    );
  }

  tag(input) {
    return (
      "<span" +
      this.toClass(this.classes.tag, input.style) +
      ">" +
      this.toString(input.data) +
      "</span>"
    );
  }
}

module.exports = HtmlParser;
