$.extend({
/*
loadFile v1.0
$.loadFile('js/test1.js',function(){},function(data){});
$.loadFile(['js/test1.js','js/test2.js'],function(){},function(data){});
*/
//file：文件路径 callback：回调函数 error：失败回调
loadFile:function(file,callback,error){callback=callback||function(){};error=error||function(){};var htmlDoc=document.getElementsByTagName('head')[0],okCounts=0,fileCounts=0,i,loadFilePath=null;var files=typeof file=="string"?[file]:file;fileCounts=files.length;for(i=0;i<fileCounts;i++){var includeFile=null,att=null,ext,hash;loadFilePath=files[i];hash=$.getHashCode(loadFilePath);if(document.getElementById("loadHash_"+hash)){okCounts+=1;if(okCounts==fileCounts){callback();}
continue;}
att=loadFilePath.split('.');ext=att[att.length-1].toLowerCase();switch(ext){case'css':includeFile=document.createElement('link');includeFile.setAttribute('rel','stylesheet');includeFile.setAttribute('type','text/css');includeFile.setAttribute('href',loadFilePath);break;case'js':includeFile=document.createElement('script');includeFile.setAttribute('type','text/javascript');includeFile.setAttribute('src',loadFilePath);break;case'jpg':case'jpeg':case'png':case'gif':includeFile=document.createElement("img");includeFile.setAttribute('src',loadFilePath);break;default:error('载入的格式不支持:'+loadFilePath);return false;}
if(typeof includeFile!="undefined"){includeFile.setAttribute('id',"loadHash_"+hash);htmlDoc.appendChild(includeFile);includeFile.onreadystatechange=function(){if(includeFile.readyState=='loaded'||includeFile.readyState=='complete'){okCounts+=1;if(okCounts==fileCounts){callback();}}}
includeFile.onload=function(){okCounts+=1;if(okCounts==fileCounts){callback();}}
includeFile.onerror=function(){$("#loadhash_"+hash).remove();error(loadFilePath+' load error');return false;}}else{error('文件创建失败');return false;}}
return true;},getHashCode:function(str,caseSensitive){if(!caseSensitive){str=str.toLowerCase();}
var hash=1315423911,i,ch;for(i=str.length-1;i>=0;i--){ch=str.charCodeAt(i);hash^=((hash<<5)+ch+(hash>>2));}
return(hash&0x7FFFFFFF);}
});
