let express = require('express');
let cookieParser = require('cookie-parser');
//setup express app
let app = express()

app.use(cookieParser());

//basic route for homepage
app.get('/', (req, res)=>{
    res.send({
        "routes": [
            "http://localhost:3333/setcookie?name=cookie_name&value=cookie_value",
            "http://localhost:3333/setcookie/<cookie_name>/<cookie_value>",
            "http://localhost:3333/sethttponlycookie?name=cookie_name&value=cookie_value",
            "http://localhost:3333/sethttponlycookie/<cookie_name>/<cookie_value>",
            "http://localhost:3333/getallcookies",
            "http://localhost:3333/deletecookie?name=cookie_name",
            "http://localhost:3333/deletecookie/<cookie_name>",
            "http://localhost:3333/deletehttponlycookie?name=cookie_name",
            "http://localhost:3333/deletehttponlycookie/<cookie_name>"
        ]
    });
});

//JSON object to be added to cookie
let users = {
    name : "Ritik",
    Age : "18"
}
 
//Route for adding a normal cookie
app.get('/setcookie/:name/:value', (req, res)=> {
    res.cookie( req.params.name, req.params.value );
    res.json({ ...req.params, ...res.cookie });
});

//Route for adding a normal cookie
app.get('/setcookie*', (req, res)=> {
    res.cookie( req.query.name, req.query.value );
    res.json({ ...req.query, ...res.cookie });
});

//Route for adding a http only cookie
app.get('/sethttponlycookie/:name/:value', (req, res)=>{
    var date = new Date();
    date.setDate(date.getDate() + 1);
    
    res.cookie(req.params.name, req.params.value, {
        expires: date,
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
    res.json({...req.params, ...res.cookie});
});

//Route for adding a http only cookie
app.get('/sethttponlycookie*', (req, res)=>{
    var date = new Date();
    date.setDate(date.getDate() + 1);
    
    res.cookie(req.query.name, req.query.value,{
        expires: date,
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
    res.json({...req.query, ...res.cookie});
});

//Iterate users data from cookie
app.get('/getallcookies', (req, res)=>{
    //shows all the cookies
    res.send(req.cookies);
});

//Route for deleting a normal cookie
app.get('/deletecookie/:name', (req, res)=> {
    res.clearCookie( req.params.name );
    res.json({ ...req.params, ...res.cookie });
});

//Route for deleting a normal cookie
app.get('/deletecookie*', (req, res)=> {
    res.clearCookie( req.query.name );
    res.json({ ...req.query, ...res.cookie });
});

//Route for deleting a http only cookie
app.get('/deletehttponlycookie/:name', (req, res)=>{
    res.clearCookie( req.params.name );
    res.json({ ...req.params, ...res.cookie });
});

//Route for deleting a http only cookie
app.get('/deletehttponlycookie*', (req, res)=>{
    res.clearCookie( req.query.name );
    res.json({ ...req.query, ...res.cookie });
});

//server listens to port 3000
app.listen(3333, (err)=>{
    if(err)
    throw err;
    console.log('listening on port 3333');
});
