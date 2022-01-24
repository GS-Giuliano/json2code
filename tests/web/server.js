const express = require('express')
const Json2code = require("../../src/json2code.js");

const app = express()


app.get('/', function (req, res) {
    o = new Json2code({ useCDN: true, module: 'bulma' });
    o.$.top({title: "Page title"});
    
    o.$.begin();
    o.$.title({data: "Page title"});
    o.$.subTitle({data: "Page sub-title"});
    o.$.end();
    
    o.$.bottom();

    res.send(o.$.output);
})

app.listen(3000, '0.0.0.0',function () {
    console.log("Started!");
});