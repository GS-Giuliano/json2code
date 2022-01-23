/**
 * Module to parse JSON to CSV
 */

const RootParser = require("./_root.js");

class TextParser extends RootParser {
  text(input) {
    return this.toString(input.data);
  }

  title(input) {
    return input.data;
  }

  subTitle(input) {
    return input.data;
  }

  subTitle2(input) {
    return input.data;
  }

  subTitle3(input) {
    return input.data;
  }

  code(input) {
    return input.data;
  }

  bold(input) {
    return input.data;
  }

  italic(input) {
    return input.data;
  }

  underline(input) {
    return input.data;
  }

  url(input) {
    return input.data;
  }

  tag(input) {
    return input.data;
  }
}

module.exports = TextParser;
