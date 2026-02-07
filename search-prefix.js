function searchByPrefix(phonebook, prefix){
    let newArray=[];
    for (let name in phonebook){
        if(name.startsWith("ra")){
            newArray.push(name);
        }
    }
    return newArray;
}
const phonebook = { rahim: "0181", karim: "0172", rafi: "0193" }; 
const prefix = "ra";
const outPut=searchByPrefix(phonebook,prefix);
console.log(outPut);

