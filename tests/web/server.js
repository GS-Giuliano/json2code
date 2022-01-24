const express = require('express')
const Json2code = require("../../src/json2code.js");

const app = express()


app.get('/', function (req, res) {
    o = new Json2code({ useCDN: true, module: moduleName });
    o.$.begin({title: Page title});
    o.$.title("Page title");
    o.$.subTitle("Page sub-title");
    o.$.end();
    res.send(o.$.output);
})

app.listen(3000, '0.0.0.0',function () {
    console.log("Started!");
});