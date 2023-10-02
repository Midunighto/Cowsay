const infos = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : infos.name,
    e : "oO",
    T : "U "
}));


console.log(infos)