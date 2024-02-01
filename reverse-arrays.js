function reverseArray(arr) {
  // Add code.
  let output = []; // empty array to hold new values as we reverse the input array
  for(let i = arr.length-1; i >= 0; i--) { //loop from the last item in the input array to the first
    output.push(arr[i]) //push the value of the current index into the new array
    /*
    Input [A, B, C] Output []

    2: Input [A, B, C] Output [C]
                    ^
    1: Input [A, B, C] Output [C, B]
                 ^
    0: Input [A, B, C] Output [C, B, A]
    ^         ^
    i

    */

  }
return output // return the new reversed array
  
}

function reverseArrayInPlace(arr) {
  // Add code.
  let a, z;
  for(let i = 0; i < (arr.length / 2); i++){ // iterate over HALF of the array  1 2 3 4 5
                                                                            //  5 2 3 4 1
                                                                            //  5 4 3 2 1
    a = arr[i] //set temp 1 to the current index and work forward 
    z = arr[arr.length - i - 1] // set temp 2 to the last item in the array and work backwards
    arr[i] = z;
    arr[arr.length - i - 1] = a;
  }
  return arr
}


// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]  