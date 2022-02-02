/**
 * Module to parse JSON to Bootstrap
 * https://getbootstrap.com
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
      begin: '<div class="container">\n\n',
      end: "\n</div>\n\n",
      bottom: "</body>\n</html>",
    };

    this.linksCSS =
      '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">';

    this.linksJS =
      '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>';
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
    this.classes.title = "";
    this.classes.subTitle = "";
    this.classes.subTitle2 = "";
    this.classes.subTitle3 = "";
    this.classes.bold = "";
    this.classes.italic = "";
    this.classes.tag = "tag";
  }
}

module.exports = BulmaParser;
