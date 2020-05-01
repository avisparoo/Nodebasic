const express = require('express')
var cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser());


app.get(['/hello/', "/hey", "/hi"], [preprocess, secondArgument])

app.listen(3000)
//

function secondArgument(req, res) {
    //res.header
    var options = {};
    options.expires = new Date(Number(new Date()) + 315360000000);

    var options = {
        "expires": new Date(Number(new Date()) + 315360000000)
    };

    res.cookie("user", "1", options);
    //res.send('Hello ' + req.cookies.user)
    var jsonobj = {
        user : req.cookies.user
    };
    res.json(jsonobj.user);
}

function preprocess(req, res, next) {
    //res.header

    if (req.cookies.user) {
        next();
    }
    else {
        res.status(500);
        res.send("who are you?")
    }

}