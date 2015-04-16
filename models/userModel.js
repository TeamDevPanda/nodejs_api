/**
 *
 * user.js
 * @Author : Nicolas PRIN
 * @Created : 09/02/2015
 * @Company : Code-IT
 * @Project : API NodeJS
 * 
 **/

/**
 * required files 
 **/
 
var express 	= require('express');
var mongoose 	= require('mongoose');
var router 		= express.Router();

module.exports = function(schemas) {
	
	var userModel	= schemas.user;
	
	/*
	** Add user
	** @data : user data
	** @callback : callback function
	*/
	
	exports.add = function(data, callback) {
		var user 		= new usersModel();
		user.email 		= data.email;
		user.password	= sha1(data.password);
		user.firstname	= data.firstname;
		user.lastname	= data.lastname;
		user.phone		= data.phone;
		user.network	= 1;
				 
		// Save new user
		user.save(function(err){
			callback(err, user);
		});
	}
	
	/*
	** Get user
	** @where : user id
	** @callback : callback function
	*/
	
	exports.get = function(where, select, callback) {
		var query = usersModel.findOne('');
		if (select)
			query.select(select);
		query.where(where);
		query.exec(function (err, user) {
			callback(err, user);	
		});
	}
	
	/*
	** Get list
	** @where : condition
	** @offset : offset
	** @limit : limit
	** @callback : callback function
	*/
	
	exports.get_list = function(where, select, offset, limit, callback) {
		var query = userd-sModel.find(null);
		if (select) { query.select(select); }
		if (where)	{ query.where(where); }
		if (offset) { query.skip(offset); } 
		if (limit) 	{ query.limit(limit); }
		query.exec(function (err, users) {
			callback(err, users);
		});
	}
	
	
	/*
	** Update user
	** @where : user id
	** @data : user data
	** @callback : callback function
	*/
	
	exports.update = function(where, params, callback) {
		usersModel.update(where, params, { multi : false }, function (err) {
			if (err) 
				callback(err, false);
			else
				callback(false, true);
		});
	}
	
	/*
	** Delete user
	** @where : condition
	** @callback : callback function
	*/
	
	exports.remove = function(where, callback) {
		usersModel.find().remove(where, function (err) {
			if (err) 
				callback(err);
			else
				callback(false, true);
		});
	}
	
	/*
	** count
	** @where : condition
	** @callback : callback function
	*/
	
	exports.count = function(where, callback) {
		usersModel.where(where).count(function(err, ret){
			callback(err, ret);
		});
	}
	
	/**
	 * randomKey
	 * Create a random string of len length
	 **/
	
	function randomKey(len)
	{
	    var key = "";
	    var src = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	    for( var i=0; i < len; i++ )
	        key += src.charAt(Math.floor(Math.random() * src.length));
	
	    return key;
	}

};

/**
 * EOF
 **/