var myService = {
    MyService: {
        MyPort: {
            MyFunction: function (args) {
                console.log("asijdaisdnaijsdska")
                return {
                    name: args.name
                };
            },

            // This is how to define an asynchronous function.
            MyAsyncFunction: function (args, callback) {
                console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
                // do some work
                callback({
                    name: args.name
                });
            },

            // This is how to receive incoming headers
            HeadersAwareFunction: function (args, cb, headers) {
                console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
                return {
                    name: headers.Token
                };
            },

            // You can also inspect the original `req`
            reallyDetailedFunction: function (args, cb, headers, req) {
                console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
                return {
                    name: headers.Token
                };
            }
        }
    }
};

var xml = require('fs').readFileSync('aluno.wsdl', 'utf8');

var bodyParser = require("body-parser");
var soap = require("soap");
var cors = require('cors');
var express = require('express');
var app = express();
//body parser middleware are supported (optional)
  app.use(cors());
app.get('/', cors(), function (req, res) {
    res.send('Node Soap Example!<br /><a href="https://github.com/macogala/node-soap-example#readme">Git README</a>');
})
app.use(bodyParser.raw({ type: function () { return true; }, limit: '5mb' }));
app.listen(8001, function () {
    //Note: /wsdl route will be handled by soap module
    //and all other routes & middleware will continue to work
    soap.listen(app, '/wsdl', myService, xml, function () {
        console.log('server initialized');
    });
});