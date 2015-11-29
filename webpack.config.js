var path = require('path'),
	js = path.resolve('./transpiler/javascript');

module.exports = {
	context: __dirname,
    entry: path.join(js , 'app.js'),
    output: {
        path: __dirname + "/dist/app",
        filename: "main.js",
    },
    resolve: {
        alias: {
            jquery: __dirname + '/node_modules/jquery/dist/jquery.js',
            config: path.join(js, 'config.js')
        }
    }
};