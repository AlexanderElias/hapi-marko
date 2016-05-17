var Hapi = require('hapi');
var Marko = require('marko');
var Routes = require('./routes');
var Registers = require('./registers');

var server = new Hapi.Server();

server.connection({ port: process.env.port || 8000 });
server.register(Registers, function(err){ if(err){ console.log(err); }});

server.views({
	engines: {
		marko: {
			compile: function (src, options) {
				var template = Marko.load(options.filename, src);

				return function (context) {
					return template.renderSync(context);
				};
			}
		}
	},
	path: __dirname + '/templates'
});

server.route(Routes);

server.start(function () {
	console.log('Running on:', server.info.uri);
});
