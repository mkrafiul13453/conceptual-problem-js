function wordFrequency(sentence){
    let words=sentence.split(" ");
    let wordCount={};
    for (let word of words ){
        let wordLower=word.toLowerCase();

        if(wordCount.hasOwnProperty(wordLower)){
            wordCount[wordLower]++;
        }

        else{
            wordCount[wordLower]=1;
        }
    }

    return wordCount;

}

const outPut=wordFrequency("I love JS and I love coding and JS is fun");
console.log(outPut);

