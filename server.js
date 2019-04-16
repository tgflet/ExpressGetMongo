const express = require("express"),
    DB_NAME = "1955peeps",
    bp = require("body-parser"),
    port = 8500,
    app = express();

app.use(bp.json());
require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.listen(port, () =>{
    console.log(`Listing on port: ${port}`);
});