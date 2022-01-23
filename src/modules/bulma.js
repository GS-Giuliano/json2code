/**
 * Module to parse JSON to Bulma
 * https://bulma.io
 *
 */

const HtmlParser = require("./html.js");

class BulmaParser extends HtmlParser {
  constructor(options) {
    super(options);
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
    this.classes.title = "title";
    this.classes.subTitle = "subtitle";
    this.classes.subTitle2 = "subtitle is-4";
    this.classes.subTitle3 = "subtitle is-5";
    this.classes.bold = "";
    this.classes.italic = "";
    this.classes.tag = "tag";
  }
}

module.exports = BulmaParser;
