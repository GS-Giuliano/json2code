function Json2frontend(options) {
  if (typeof options === "object") {
    if (typeof options.module === "string") {
      switch(options.module)
      {
        case 'html':
          const moduleClassHtml = require("./modules/html.js");
          return new moduleClassHtml(options);
          break;
        case 'bootstrap':
          const moduleClassBootstrap = require("./modules/bootstrap.js");
          return new moduleClassBootstrap(options);
          break;
        case 'uikit':
          const moduleClassUikit = require("./modules/uikit.js");
          return new moduleClassUikit(options);
          break;
        case 'bulma':
          const moduleClassBulma = require("./modules/bulma.js");
          return new moduleClassBulma(options);
          break;
        case 'skeleton':
          const moduleClassSkeleton = require("./modules/skeleton.js");
          return new moduleClassSkeleton(options);
          break;
      }      
      
    }
  }
}

exports = module.exports = Json2frontend;
