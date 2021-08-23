var inputs = "Hello Dello Koconi you"

function spinWords(string = ""){
    var a = string.split(" ");
    var result = [];
    
    for(var i=0; i < a.length; i++){
        if(a[i].length >= 5){
            var b = a[i].split('').reverse().join('');
            result.push(b);
        } else {
            result.push(a[i]);
        }
    }

    return result.join(' ');
}

console.log(spinWords(inputs));