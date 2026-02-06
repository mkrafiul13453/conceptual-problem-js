function  removeDuplicates(arr){
    let newArray=[];
    for (let item of arr){
        if(newArray.includes(item)===false){
            newArray.push(item);
        }
    }
    return newArray;
}
const arr = [1, 1, 1, 1];
const outPut=removeDuplicates(arr);
console.log(outPut);