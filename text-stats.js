function textStats(text){
    const oneLine=text.split(" ").join("").toLowerCase();
    const character=oneLine.length;
    let vowelCount=0;
    let consonantCount=0;
    for( let vowel of oneLine){
        if(vowel==="a" || vowel==="e" || vowel==="i" || vowel==="o" || vowel==="u"){
            vowelCount++
        }
        else{
            consonantCount++;
        }
    }
    const array=text.split(" ");
    const word=array.length;

    return{
        character:character,
        word:word,
        vowel:vowelCount,
        consonant:consonantCount,
    };
}
const text="I am ok";
const outPut=textStats(text);
console.log(outPut);