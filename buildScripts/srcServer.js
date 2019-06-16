// this file configures the webserver that will serve up our files in the source directory
import express from 'express';
import path from 'path';
import open from 'open';
// bring in webpack
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000
const app = express() // create an instance of express
const compiler = webpack(config);

// inform express about usage
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// tell express which routes it should handle
// any references to root should be handled by this function
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

// tell express to listen to our port
app.listen(port, function(err) {
    // handle any errors
    if (err) {
        console.log(err)
    } else {
        // open website
        open('http://localhost:' + port)
    }
})