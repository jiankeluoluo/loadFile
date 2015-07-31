# loadFile
loadFile是个简易的Jquery插件，用于异步加载javascript、css文件，可以单文件、多文件一起加载，也可以设置加载完成回调和加载失败回调函数。

使用例子：

1、单文件加载
$.loadFile('js/test1.js',function(){},function(data){});

2、多文件加载
$.loadFile(['js/test1.js','js/test2.js'],function(){},function(data){});
