// create a web server
// 1. create a server
// 2. register request event
// 3. bind port number, start server

// 1. create a server
var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');

var comments = [
    {
        name: 'Jack',
        message: 'hello',
        dateTime: '2019-01-01'
    },
    {
        name: 'Rose',
        message: 'hello',
        dateTime: '2019-01-01'
    },
    {
        name: 'Jack',
        message: 'hello',
        dateTime: '2019-01-01'
    },
    {
        name: 'Rose',
        message: 'hello',
        dateTime: '2019-01-01'
    },
    {
        name: 'Jack',
        message: 'hello',
        dateTime: '2019-01-01'
    }
];

http
    .createServer(function (req, res) {
        // use url.parse to parse url string
        // true means to parse query string into an object
        var parseObj = url.parse(req.url, true);
        // get pathname
        var pathname = parseObj.pathname;
        if (pathname === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found');
                }
                var htmlStr = template.render(data.toString(), {
                    comments: comments
                });
                res.end(htmlStr);
            });
        } else if (pathname === '/post') {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found');
                }
                res.end(data);
            });
        } else if (pathname.indexOf('/public/') === 0) {
            fs.readFile('.' + pathname, function (err, data) {
                if (err) {
                    return res.end('404 Not Found');
                }
                res.end(data);
            });
        } else if (pathname === '/pinglun') {
            // get query string
            // use parseObj.query
            // console.log(parseObj.query);
            // push new comment to comments array
        } else {

        }}).listen(3000, function () {});