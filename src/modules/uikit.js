/**
 * Module to parse JSON to UIKit
 * https://getuikit.com
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
      begin: '<div class="uk-container">\n\n',
      end: "\n</div>\n\n",
      bottom: "</body>\n</html>",
    };

    this.linksCSS =
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css" />';

    this.linksJS =
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js"></script>';
    this.linksJS =
      this.linksJS +
      "\n" +
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"></script>';
    this.styles = {
      default: "black",
      dark: "dark",
      light: "light",
      white: "white",
      primary: "primary",
      link: "link",
      info: "info",
      warning: "warning",
      danger: "danger",
    };
    this.classes.title = "uk-heading-small";
    this.classes.subTitle = "uk-text-lead";
    this.classes.subTitle2 = "uk-text-large";
    this.classes.subTitle3 = "uk-text-default";
    this.classes.filter = "uk-text-meta";
    this.classes.text = "uk-text-default";
    this.classes.bold = "";
    this.classes.italic = "";
    this.classes.tag = "tag";
  }
}

module.exports = BulmaParser;
