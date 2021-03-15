// 1. Biggie Size

function positBig(arr) {
    for( var i = 0; i< arr.length; i++) {
        if ( arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
var x = [1,3,5,344,-76,435,-43,345];

console.log(positBig(x));

// 2. Print Low, Return High

function prtLowRtrnHigh(arr) {
    var low = arr[0];
    var high = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        }
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
var x = [2,4,56,6,5,34,5,-4];
console.log(prtLowRtrnHigh(x));

// 3. Print One, Return Another

function prtOneRtrnAther(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !=0) {
            return arr[i];
        }
    }
}
var x = [12,3,4,4,5,32,3,43,534,-43,4345];
console.log(prtOneRtrnAther(x));

// 4. Double Vision 

function doubleArr(arr) {
    var j = [];
    for( var i = 0; i < arr.length; i++) {
        j.push(arr[i]*2)
    }
    return j;
}

var x = [3,4,5,6,435,34,43,5,-43,434];
console.log(doubleArr(x));

