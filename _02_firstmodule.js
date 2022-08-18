//in this example, we will create a module that returns a date
/**
 *  what is a module in node.js? 
 *  a module is a library that contains functions 
 *  to use a module use the require() method 
 *  with the module name 
 *  eg var http = require('http')
 */
// module that returns the current date and time 
exports.myDateTime = function (){
    return Date();
};
