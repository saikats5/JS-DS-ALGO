//'abba' = 'abba' --> true
//'abc' = 'cba' --> false

function palindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function palindrome(str){
    return str.split('').every((char, i)=>{
        return char === str[str.length - i - 1];
    });
}