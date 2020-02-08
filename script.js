// Пер
var randWords = Number(prompt('Какое количество рандомных значений нужно создать?'));
var minLettersAmount = Number(prompt('Какое минимальное количество символов в них должно быть?'));
var maxLettersAmount= Number(prompt('Какое максимальное количество символов в них должно быть?'));
var arr = [];
for (var i = 0; i < randWords; i++) {
    var word = '';
    var lettersAmount = Math.floor(Math.random() * (maxLettersAmount - minLettersAmount) + minLettersAmount);
    for (var j = 0; j < lettersAmount; j++) {
        var index = Math.floor(Math.random() * (alphabet.length - 1));
        word += alphabet[index];
    }
    arr.push(word)
}
console.log(arr);

var sorted = {};
for (var t = 0; t < arr.length; t++){
    if (!sorted[arr[t].length]) {
      sorted[arr[t].length] = [];
    }
    sorted[arr[t].length].push (arr[t]);
    console.log(t, arr[t].length);
}
console.log(sorted);
for (var key in sorted) {
    alert ('У вас ' + sorted[key].length + ' слов у которых ' + key + ' букв ыв слове');
}