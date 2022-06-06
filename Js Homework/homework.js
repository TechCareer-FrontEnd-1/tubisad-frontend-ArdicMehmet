let arr = [];
for(let i = 0; i<2; i++){
    arr.push(parseInt(prompt(`Lütfen ${i+1}. sayıyı girin`)));
}
document.writeln(`Girilen sayilardan en küçüğü : ${Math.min(... arr)} <br>`);
document.writeln(`Girilen sayilardan en büyüğü : ${Math.max(... arr)} <br>`);
document.writeln(`Girilen sayilardan en büyüğünün karekökü : ${Math.sqrt(Math.abs(Math.max(... arr)))} <br>`);
document.writeln(`Girilen sayilardan en büyüğünün karekökünün üste yuvarlanması : ${Math.ceil(Math.sqrt(Math.abs(Math.max(... arr))))} <br>`);
document.writeln(`Girilen sayilardan en küçüğünün mutlak değeri : ${Math.abs(Math.min(... arr))} <br>`);
document.writeln(`Girilen sayilardan en küçüğü alt taban en büyüğü üst taban şeklinde üstü : ${Math.pow(Math.floor(Math.min(... arr)),Math.ceil(Math.max(... arr)))} <br>`);