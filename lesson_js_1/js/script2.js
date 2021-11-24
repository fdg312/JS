

function first(word) {

    if (typeof(word) != 'string') {
        return (`Это не строка!(${word})`);
    }
    else if (typeof(word) == 'string') {
        word = word.trim()
        console.log(`Это строка!(${word})`);

        if(word.length > 5){
            return('Это строка больше 5 символов: '+word.slice(0,5)+'...');
        }
        else if(word.length < 5){
            return('Это строка меньше 5 символов: '+word)
        }
    }
}

console.log(first('   9fва  '));
console.log(first(432419));