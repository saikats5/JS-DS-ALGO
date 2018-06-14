const string = "Hello World";
const chars = {};

let max = 0;
let maxChar = '';

for(let char of string){
    if(!chars[char]){
        chars[char] = 1;
    }else{
        chars[char]++;
    }

    //Max Char Iteration
    for(let char in chars){
        if(chars[char] > max){
            max = chars[char];
            maxChar = char;
        }
    }

}

for(let char of string){
    chars[char] = chars[char] + 1 || 1;
}