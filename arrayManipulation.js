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