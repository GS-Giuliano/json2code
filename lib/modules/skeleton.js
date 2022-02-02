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
 
     this.linksCSS ='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">';
     this.linksCSS =
      this.linksCSS +
      "\n" +
       '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">';
 
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
 