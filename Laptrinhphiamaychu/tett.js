var fs = require("fs")
console.log('go go');
fs.mkdir('\Users\PC\TKW22\Laptrinhphiamaychu\form\test', function(err){
    if(err) {return console.error(err);}
    console.log('dic');
})