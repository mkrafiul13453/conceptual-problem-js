function checkPassword(password){
    let reasons=[];
    let length=password.length;
    let hasUpperCase=false;
    let hasNumber=false;
    let hasSpace=password.includes(" ");

    for( i=0; i<length; i++){
        let character=password[i];
        if(character>=0 && character<=9){
            hasNumber=true;
        }
        if(character>="A" && character<="Z"){
            hasUpperCase=true;
        }
    }

    if(hasUpperCase===false){
        reasons.push("Missing upper case.");
    }
    if(hasNumber===false){
        reasons.push("Missing number.");
    }
    if(hasSpace===true){
        reasons.push("Space found in password.");
    }

    let isValid;
    if(reasons.length===0){
        isValid=true;
    }
    else{
        isValid=false;
    }

    return{
        valid:isValid,
        reasons,
    };

}

const outPut=checkPassword( "Hello123");
console.log(outPut);
