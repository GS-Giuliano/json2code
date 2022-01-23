/**
 * Example module to parse JSON to ...
 */

class RootParser {
  constructor(options) {
    this.useCDN = false;
    this.useModule = "";
    this.CDNJs = "";
    this.CDNCss = "";
    this.jsCode = "";
    this.cssCode = "";

    this.headerContent = "";
    this.bodyContent = "";
    this.footerContent = "";
    this.styles = {
      default: "",
      dark: "",
      light: "",
      white: "",
      primary: "",
      link: "",
      info: "",
      warning: "",
      danger: "",
    };

    this.classes = {
      text: "",
      bold: "",
      italic: "",
      underline: "",
      url: "",
      title: "",
      subTitle: "",
      code: "",
    };

    if (typeof options === "object") {
      if (options.useCDN === true) {
        this.useCDN = true;
      } else {
        this.useCDN = false;
      }
    }
  }

  toClass() {
    let classString = "";
    if (arguments.length > 0) {
      let arr = Array();
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string" && arguments[i] != "") {
          arr.push(arguments[i]);
        }
      }
      if (arr.length > 0) {
        classString = ' class="' + arr.join(" ") + '"';
      }
    }
    return classString;
  }

  toString(input) {
    if (typeof input === "undefined") {
      return "";
    } else {
      return input.toString();
    }
  }
}

module.exports = RootParser;
