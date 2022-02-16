// * `xify` - returns the same string, but with every character replaced by an 'x'
//   * Examples:
//     * xify('hello') -> 'xxxxx'
//     * xify('hi there') -> 'xxxxxxxx'


console.log(xify("hello"));

function xify(str){
    let strX = "";

    for (let i = 0; i < str.length; i ++){
        strX += 'x';
    }
    return strX;
}

console.log("_________________________________");
// * `yellingChars` - returns the given string with an exclamation point after each character
//   * Examples:
//     * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//     * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
//   * Hints:
//     * We can add more than one thing to the string each time through the loop. In this case, it's 
//      the current character AND an exlamation point.


console.log (yellingChars("hello"));


function yellingChars(str){
    let strX = "";

    for (i = 0; i < str.length; i++){
        strX = strX + str[i] + "!";
    }
    return strX;
}

console.log("__________________________________");


// * `indexedChars` - adds the index of each character before that character in the given string
//   * Examples:
//     * indexedChars('hello') -> '0h1e2l3l4o'
//     * indexedChars('bye') -> '0b1y2e'
//   * Hints: 
//     * We can add something BEFORE the current character as well!

console.log(indexedChars("pomegranate"));

function indexedChars(input){
    let x = "";
    let y = 0;

    for (let i = 0; i < input.length; i++){
        x = x + y++ + input[i];
    }
    return x;
}

console.log("_________________________________");


// * `numberedChars` - adds the number of each character before that character in the given string
//   * Examples:
//     * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
//     * numberedChars('bye') -> '(1)b(2)y(3)e'
//   * Hints: 
//     * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!


console.log(numberedChars("giraffe"));

function numberedChars(input){
    let x = "";
    let y = 1;

    for (let i = 0; i < input.length; i++){
        x = x + "(" + y++ + ")" + input[i];
    }
    return x;
}

console.log("_________________________________");

// * `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
//   * Examples:
//     * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
//     * exclaim('This is fine.') -> 'This is fine!'

console.log(exclaim("Rest in peace."));

function exclaim(input) {
    let x = "";

    for (let i = 0; i < input.length; i++){
        // if character is a ? or a ., then replace with a !
        //if character is anything else, keep it
        if (input[i] === "?" || input[i] === "."){
            x = x + "!";
        }
        else {
            x = x + input[i];
        }
    } 
    return x;
}




console.log("_________________________________");



// * `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
//   * Examples:
//     * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
//     * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'

console.log(repeatIt("Bloody Mary ", 3));

function repeatIt(input, num){
    let x = "";

    for (let i = 0; i < num; i++){
        x = x + input

    }
    return x;
}

console.log("_________________________________");



// * `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
//   * Examples:
//     * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//     * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

console.log(truncate("“The more you know, the more you know you don’t know.” Aristotle "));

function truncate(input) {
    let x = "";

    for (let i = 0; i < 15; i++) {
        x = x + input[i];
    } 
    return x + "...";
}

console.log("_________________________________");


// * `ciEmailify` - creates an email from a two-part name
//   * Examples:
//     * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
//     * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'

console.log(ciEmailify("Jill Kidman"));

function ciEmailify(input){
    let x = "";

    for (let i = 0; i < input.length; i++){
        if (input[i] !== " "){
            x = x + input[i];
        }
        else if (input[i] === " "){
            x = x + ".";
        }
    }
    return x.toLowerCase() + "@codeimmersives.com";
}


console.log("_________________________________");


// * `reverse` - reverses the given string
//   * Examples:
//     * reverse('colin') -> 'niloc'
//     * reverse('mesuara') -> 'arausem'


console.log(reverse("desserts"));

function reverse(input){
    let x = "";

    for (let i = input.length -1; i >= 0; i--){
        x = x + input[i];
    }return x;
}


console.log("_________________________________");

// * `onlyVowels` - returns only the vowels from a word
//   * Examples:
//     * onlyVowels('Colin Jaffe') -> 'oiae'
//     * onlyVowels('quickly') -> 'ui'
//     * onlyVowels('Anthony DeRosa') -> 'Aoeoa'

console.log(onlyVowels("Anthony DeRosa"));

function onlyVowels(input) {
    let x = "";

    for (let i = 0; i < input.length; i++) {
        if (
            input[i] === "a" ||
            input[i] === "e" ||
            input[i] === "i" ||
            input[i] === "o" ||
            input[i] === "u" ||
            input[i] === "A" ||
            input[i] === "E" ||
            input[i] === "I" ||
            input[i] === "O" ||
            input[i] === "U") {
            x = x + input[i];
        }
    }
    return x;
}
