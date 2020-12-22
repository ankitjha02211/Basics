//M1
// function linearSearch(arr,val){
// let myArray = arr;
// let searchValue = val;
// return myArray.indexOf(val)
// }

//M2

function linearSearch(arr,val){
    let myArray = arr;
    let searchValue= val;
    let index = -1
    for (let i = 0; i < myArray.length; i++) {
        if(myArray[i]==val){
             index = i   
        }
    }
    return index
}

let result = linearSearch([10,15,20,17],17)
console.log(result);