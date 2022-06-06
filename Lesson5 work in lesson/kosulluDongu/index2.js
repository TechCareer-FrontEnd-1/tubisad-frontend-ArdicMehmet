let sumFunction = () => {
    let sum = 0;
    while (true) {
        var number = parseInt(prompt('Lutfen sayi girin'));
        if (number === 44) {
            break;
        }
        else if (number === 1 || number < 0) {
            alert('sayi 1 veya 0 dan küçük lütfen tekrar sayı girin');
            break;
        }
        else if (number === 7) {
            continue;
        }
        sum += number;
    }
    return sum;
}


document.writeln('<br> sum : ' + sumFunction);