function getNumber() {
    let numberArray = [];
    let kosul = 0;

    while (kosul < 5) {
        let number = parseInt(prompt("Lutfen 1 ile 10 arasında sayi girin"));

        if (number > 0 && number < 10) {
            numberArray.push(number);
            kosul++;
        }
        else {
            alert("1 ile 10 arasında sayı girmediniz !!!");
        }

    }
    let sum = sumFunction(numberArray);
    document.write("<br> sum : " + sum);
    document.write("<br> avarage : " + avarageFunction(sum, numberArray.length));
    document.write("<br> maxValue : " + maxValue(numberArray));
    document.write("<br> minValue : " + minValue(numberArray));

}

function sumFunction(array) {
    let sum = 0;
    for (value of array) {
        sum += value;
    }
    return sum;
}
function avarageFunction(sum, length) {
    return sum / length;
}
function maxValue(array) {
    return Math.max(...array);
}
function minValue(array) {
    return Math.min(...array);
}

getNumber();