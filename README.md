# Cookies demo

## Setup

The node backend:

    $ cd backend 
    $ npm install

Run with:

    $ node index.js
    ^ You should be in the ./backend folder

The react frontend:

    $ cd frontend/app
    $ npm install

Run with:

    $ npm start
    ^ You should be in the ./frontend/app folder

## Backend Routes

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

## HttpOnly Cookies

The routes for testing http only cookies are

        "http://localhost:3333/sethttponlycookie?name=cookie_name&value=cookie_value",
        "http://localhost:3333/sethttponlycookie/<cookie_name>/<cookie_value>",

## Plain Cookies

The routes for testing plain cookies are

        "http://localhost:3333/setcookie?name=cookie_name&value=cookie_value",
        "http://localhost:3333/setcookie/<cookie_name>/<cookie_value>",

## Other Tools

#### Burp Suite Community Edition

For watching network traffic

https://portswigger.net/burp/communitydownload