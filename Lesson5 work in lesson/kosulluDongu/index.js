
let sum =0;
while(true){
   var number = parseInt(prompt('Lutfen sayi girin'));
   if(number === 44){
       break;
   }
   else if(number === 1 || number<0){
    console.log('sayi 1 veya 0 dan küçük');
    break;
   }
   else if(number === 7){
       continue;
   }
   sum+=number;
}
document.writeln('<br> sum : '+sum);