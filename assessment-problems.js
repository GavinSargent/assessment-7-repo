// PROBLEM 1
addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True


function addToZero (arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

// Time Complexity = O(n^2)
// Space Complexity = O(1)


//PROBLEM 2

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j] && i !== j ){
                return false
            }
        }
    }
    return true
}

// Time Complexity = O(n^2)
// Space Complexity = O(1)


// PROBLEM 3

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("abcdefghijklmnopqrstuvxyz");
// -> False

isPangram("I like cats, but not mice");
// -> False


function isPangram (str) {
    let lowerStr = str.toLowerCase()
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    for(let i = 0; i < alphabet.length; i++){
        if(lowerStr.includes(alphabet[i]) === true){
        } else {
        return false
        }
    } 
    return true
}

// Time Complexity = O(n)
// Space Complexity = O(1)


// PROBLEM 4

console.log(findLongestWord(["hi", "hello", "Extraordinary"]));
// -> 5

function findLongestWord (arr) {
    let longestWordLength = 0 
    //loop through the array
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestWordLength){
            longestWordLength = arr[i].length
        }
    }
      return longestWordLength  

}


// Time Complexity = O(n)
// Space Complexity = O(1)