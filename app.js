var koa = require('koa');
var koa_static = require('koa-static-server');
var app = koa();
var reload = require('auto-reload');
var controller = require('koa-route');
var views = require('co-views')
var render = views('./view', {
  map: { html: 'ejs' }
})

app.use(koa_static({
	rootDir: './static/',
	rootPath: '/static/',
	maxage: 0
}));

//app.use(function *(){
  //this.body = 'Hello 1World';
//});

app.use(controller.get('/route_test', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = 'Hello World';
}));

app.use(controller.get('/ejs_test', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('test',{title:'title'});
}));


app.use(controller.get('/', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('index');
}));

app.use(controller.get('/backet', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('backet');
}));

app.use(controller.get('/search', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('search');
}));


app.use(controller.get('/channel', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('channel',{nav:'男生频道'});
}));

app.use(controller.get('/user-center', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = yield render('user-center',{nav:'用户中心'});
}));

app.listen(3000);