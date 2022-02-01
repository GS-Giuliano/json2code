/**
 * Module to parse JSON to Bulma
 * https://bulma.io
 *
 */

const HtmlParser = require("./html.js");

class BulmaParser extends HtmlParser {
  constructor(options) {
    super(options);

    this.page = {
      top: "<!DOCTYPE html>\n<html>\n",
      titleBegin: "<title>",
      titleEnd: "</title>\n",
      headBegin: "<head>\n",
      headEnd: "</head>\n<body>\n\n",
      head: '\t<meta charset="utf-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n',
      begin: '<section class="section">\n<div class="container">\n\n',
      end: "\n</div>\n</section>\n\n",
      bottom: "</body>\n</html>",
    };

    this.linksCSS =
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">';

    this.styles = {
      default: "is-black",
      dark: "is-dark",
      light: "is-light",
      white: "is-white",
      primary: "is-primary",
      link: "is-link",
      info: "is-info",
      warning: "is-warning",
      danger: "is-danger",
    };
    this.classes.title = "title is-2";
    this.classes.subTitle = "subtitle is-3";
    this.classes.subTitle2 = "subtitle is-4";
    this.classes.subTitle3 = "subtitle is-5";
    this.classes.filter = "subtitle is-6";
    this.classes.bold = "";
    this.classes.italic = "";
    this.classes.tag = "tag";
  }
}

module.exports = BulmaParser;
