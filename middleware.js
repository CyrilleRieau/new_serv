const express = require('express');
const bodyParser = require('body-parser');
//const auth = require('http-auth');
let app = express();
const basicAuth = require('express-basic-auth');
app.use(basicAuth({
    users: { 'cyrille': 'cool' },
    challenge: true,
    realm: 'Imb4T3st4pp'
}));
/*let basic = auth.basic({
    realm: "password file",
    file: __dirname + "/.htpasswd"
});*/

//app.use("/private", auth.connect(basic));
app.use(express.static('public'));

app.post("/auth", bodyParser.urlencoded({ extended: true }), function(request, response) {
    console.log(request.body);
    response.send("Success!")
});

/*app.get('/', function(req, res) {
    res.send(`Hello from express - ${req.user}!`);
});*/

app.listen(80, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('listening on 80...')
});