
module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function(req, res){
			var data = {
				includeName: '../includes/index.marko',
				title: 'Hello Wrold!'
			};
			res.view('template', data);
		}
	},
	{
		/*
			Serves static assets directory
		*/
		method: 'GET',
		path: '/static/{path*}',
		handler: { directory: { path: 'static' } }
	},
];
