var string1 = "helloelelelele";
var str2 ="el";
var c = (string1.match(/el/g) || []).length;
var count = (string1.split(str2).length - 1);
var c2 = (string1.split(/el/g).length - 1);


console.log("console with split and str2 : " + count);
console.log("console with match: " + c);
console.log("console with split re: " + c2);
