/**
 * Example module to parse JSON to ...
 */

class RootParser {
  constructor(options) {
    this.output = '';
    this.useOutput = true;
    this.useCDN = false;
    this.useModule = '';
    this.CDNJs = '';
    this.CDNCss = '';
    this.jsCode = '';
    this.cssCode = '';

    this.page = {
      title: '',
      titleBegin: '',
      titleEnd: '',
      top: '',
      head: '',
      headBegin: '',
      headEnd: '',
      begin: '',
      end: '',
      bottom: ''
    };

    this.headerContent = '';
    this.bodyContent = '';
    this.footerContent = '';
    this.styles = {
      default: '',
      dark: '',
      light: '',
      white: '',
      primary: '',
      link: '',
      info: '',
      warning: '',
      danger: '',
    };

    this.classes = {
      text: '',
      bold: '',
      italic: '',
      underline: '',
      url: '',
      title: '',
      subTitle: '',
      code: '',
    };

    if (typeof options === "object") {
      if (options.useCDN === true) {
        this.useCDN = true;
      } else {
        this.useCDN = false;
      }
    }
  }

  top(options) {
    this.beginOptions = options;
    if (typeof this.beginOptions.title === "string")
    {
      this.page.title = this.beginOptions.title;
    }
    this.output = '';

  }

  begin() {
    this.output = this.output + this.page.begin;
  }
  end() {
    this.output = this.output + this.page.end;
  }

  bottom() {
    if (typeof this.beginOptions === "object")
    {
      let output = this.page.top;
      if (this.page.head != '')
      {
        output = output + this.page.headBegin;
        output = output + this.page.head;
        if (this.page.title != "")
        {
          output = output + this.page.titleBegin + this.page.title + this.page.titleEnd;
        }
        if (this.cssCode != "")
        {
          output = output + this.cssCode;
        }
        output = output + this.page.headEnd ;
      }
      this.output = output + this.output  + this.page.bottom;
    }
  }

  toClass() {
    let classString = '';
    if (arguments.length > 0) {
      let arr = Array();
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string" && arguments[i] != '') {
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
      return '';
    } else {
      return input.toString();
    }
  }

  toOutput(input)
  {
    if (this.useOutput)
    {
      this.output = this.output + input;
    }
    return(input);
  }

}

module.exports = RootParser;
