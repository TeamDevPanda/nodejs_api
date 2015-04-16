/**
 *
 * log.js
 * @Author : Nicolas PRIN
 * @Created : 14/04/2015
 * @Company : Code-IT
 * @Project : NODE JS API
 * 
 **/

var colors 	= require("colors");
var config 	= require("../config/config.js");
var Time 	= new Date();

var date 	= Time.getHours()+":"+Time.getMinutes()+":"+Time.getSeconds()+":"+Time.getMilliseconds()+" - ";


exports.error = function(file, txt) {
	if (config.CONFIG_DEV === true)
		console.log((date+"["+file+"][ERROR] ").blue+txt.red);
};

exports.info = function(file, txt) {
	if (config.CONFIG_DEV === true)
		console.log((date+"["+file+"][INFO] ").blue+txt.green);
}; 

exports.progress = function(file, txt) {
	if (config.CONFIG_DEV === true)
		console.log((date+"["+file+"][INFO] ").blue+txt.yellow);
}; 