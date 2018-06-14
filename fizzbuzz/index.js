Multiple of 3 print 'FIZZ'
Multiple of 5 print 'BUZZ'

function fizzBuzz(n){
    for(let i; i<=n; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('FIZZBUZZ');
        }else if(i%3 === 0){
            console.log('FIZZ');
        }else if(i%5 === 0){
            console.log('BUZZ');
        }else{
            console.log(i);
        }
    }
}