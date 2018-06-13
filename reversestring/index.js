//reverse('hello') === 'olleh'
//abc = cba --> true
function reverse(str){
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

function reverse(str){
    let reversed = '';
    for(let character of str){
        reversed = character + revresed;
    }
    return reversed;
}

function reverse(str){
    return str.split('').reduce((reversed, character)=>{
        return character + reversed;
    }, '');
}