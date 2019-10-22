output = [];
function fizzBuzz(i) {
    var output = [];
    for(var i=1; output.length<=99; i++) {
        if(i%3==0 && i%5==0) {
            output.push("fizzBuzz");
        }
        else if(i%3==0) {
            output.push("fizz");
        }
        else if(i%5==0) {
            output.push("buzz");
        }
        else {
            output.push(i);
        }
    }
    return output;
}
console.log(output);
