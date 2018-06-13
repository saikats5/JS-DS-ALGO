//'abba' = 'abba' --> true
//'abc' = 'cba' --> false

function palindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}