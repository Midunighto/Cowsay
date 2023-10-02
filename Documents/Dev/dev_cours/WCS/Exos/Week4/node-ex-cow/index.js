const infos = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ${infos.name} from ${infos.campus}`,
    e : "oO",
    T : "U "
}));

