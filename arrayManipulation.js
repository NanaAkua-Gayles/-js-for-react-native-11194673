function processArray(array){
    return array.map(num =>{
        if (num %2 === 0){
            return num**2;
        }
        else{
            return num*3;
        }
    });
}
var originalArray =[1,2,3,4,5];
var newArray = processArray(originalArray);
console.log(newArray);

function formatArrayStrings(strings,numbers){
    return strings.map(function(string,index){
        if(numbers[index] % 2 === 0 ){
            return string.toUpperCase();
        }
        else{
            return string.toLowerCase();
        }
    });
}

var originalStrings=["Christ", "biBLe", "Destiny", "JEHOVAH", "Saviour"];
var numbersArray = originalArray;
var formattedArray = formatArrayStrings(originalStrings, numbersArray);
console.log(formattedArray);