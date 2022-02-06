var x = "Clarusway" ;
var y = "" ;

console.log(x.length);
console.log(y.length);

//------------example-----------

var a = "Hello "
var b = "World"

var c = b.concat(a)

console.log(c);

//------------example-----------

var x = "Clarusway";

console.log(x.charAt(0));

console.log(x.charAt(8));

//------------example-----------

var s = "Hello bro, welcome to Clarusway" ;
var a = s.includes("bro");

console.log(a);

//------------example-----------

var a = "Hello John, welcome to Clarusway."
var b = a.indexOf("to");

console.log(b);

//------------example-----------

var a = "Hello John, welcome to Clarusway."
var b = a.indexOf("w",13);

console.log(b);

//------------example-----------

var a = "Hello John, welcome to Clarusway. How are you John?";
var b = a.lastIndexOf("John")

console.log(b);

//------------example-----------

var a = "Hello John, welcome to Clarusway.";

var rep = a.replace("Clarusway", "start a new life")

console.log(rep);

//------------example-----------

var str = "Hello John, welcome to Clarusway.";
var rep = str.replace(/JOHN/i, "Edward" )

console.log(rep);

//------------example-----------


