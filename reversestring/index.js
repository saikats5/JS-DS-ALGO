//reverse('hello') === 'olleh'

function reverse(str){
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}