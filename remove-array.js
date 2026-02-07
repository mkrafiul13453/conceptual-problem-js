function removeDuplicates(arr){
    let newArray=[];
    for(let num of arr){
        if(!newArray.includes(num)){
            newArray.push(num);
        }
    }
    return newArray;
}
const arr=[5, 3, 5, 2, 3, 9, 2, 7];
const outPut=removeDuplicates(arr);
console.log(outPut);