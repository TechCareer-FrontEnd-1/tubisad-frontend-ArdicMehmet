
function translate(fullName){
    let piece = fullName.substring(1,fullName.length-1);
    let star = "";
    for(let i =0; i<fullName.length-2;i++){
        star+='*';
    }
    return fullName.replace(piece,star);
}

let fullName = prompt("Lutfen adınızı girin");

document.write('<br>'+translate(fullName));


