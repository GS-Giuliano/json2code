/**
 * Module to parse JSON to CSV
 */

const RootParser = require("./_root.js");

class TextParser extends RootParser {
  text(input) {
    return this.toString(input.data);
  }

  title(input) {
    return this.toOutput(input.data);
  }

  subTitle(input) {
    return this.toOutput(input.data);
  }

  subTitle2(input) {
    return this.toOutput(input.data);
  }

  subTitle3(input) {
    return this.toOutput(input.data);
  }

  code(input) {
    return this.toOutput(input.data);
  }

  bold(input) {
    return this.toOutput(input.data);
  }

  italic(input) {
    return this.toOutput(input.data);
  }

  underline(input) {
    return this.toOutput(input.data);
  }

  url(input) {
    return this.toOutput(input.data);
  }

  tag(input) {
    return this.toOutput(input.data);
  }
}

module.exports = TextParser;
