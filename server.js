//引入http模块
var http = require("http");
const { url } = require("inspector");
//设置主机名
var hostName = '127.0.0.2';
//设置端口
var port = 8080;
//创建服务
var server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end("hello  word");

});
server.listen(port,hostName,function(){
    console.log(`服务器运行在http://${hostName}:${port}`);
});