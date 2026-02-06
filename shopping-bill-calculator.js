function  calcBill(prices, items){
    let itemCount={};
    for(let item of items){
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        }
        else{
            itemCount[item]=1;
        }
    }

    let total=0;
    for (let product in itemCount){
        let itemQuantity=itemCount[product];
        let itemPrice=prices[product];
        total=total+(itemQuantity*itemPrice);
    }

    return{
        total:total,
        itemCount:itemCount,
    };
}

const outPut=calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 },["egg", "egg", "rice", "oil", "egg", "sugar"]);
console.log(outPut);