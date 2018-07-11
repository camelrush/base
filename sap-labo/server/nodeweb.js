var express = require("express");
var bodyParser = require("body-parser");
 
// express application
var app = express();
 
// add body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Max-Age', '86400');
  next();
});

app.options('*', function (req, res) {
  res.sendStatus(200);
});
 
// set routing.
app.use("/api/", (function () {
    var router = express.Router();
 
    // GET: /api/user/:id
    router.get("/user/:id", (request, response) => {
        var user = {
            id: request.params.id,
            name: "tanaka",
            role: "group1"
        }
        response.json(user);
    });
 
    // POST: /api/user
    router.post("/user", (request, response) => {
        var body = request.body;
        if (!body.username || !body.password) {
            return response.json(false);
        }
        var user = {
            name: body.username,
            role: body.password
        };
        console.log(user);
        response.json(user);
    });
 
    return router;
})());
 
// start web applicaiton.
app.listen(3000);
