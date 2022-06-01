
var object = {
    name:"Mehmet",
    surname:"Ardıç"
}

var jsonToString = JSON.stringify(object);
document.writeln("name:" +jsonToString.substring(jsonToString.indexOf("Mehmet"),jsonToString.indexOf("Mehmet")+6));
document.writeln("surname:" +jsonToString.substring(jsonToString.indexOf("Ardıç"),jsonToString.indexOf("Ardıç")+5));

stringToJson = JSON.parse(jsonToString);


document.writeln("<br><mark>name:</mark> "+stringToJson.name + "<br> <mark>surname</mark> : "+stringToJson.surname);