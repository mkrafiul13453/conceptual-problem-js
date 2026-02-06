function analyzeMarks(marksObj){

    let total=0;
    let highestMark=-Infinity;
    let lowestMark=Infinity;
    let higherSubject=null;
    let lowerSubject=null;


    for (let subject in marksObj){
        let marks=marksObj[subject];
        if(marks>highestMark){
            highestMark=marks;
            higherSubject=subject;
        }
        if(marks<lowestMark){
           lowestMark=marks;
           lowerSubject=subject;
        }
        total=total+marks;
    }
    let average=total/Object.keys(marksObj).length;

    return{
        total:total,
        average:average,
        highest:higherSubject,
        lowest:lowerSubject,

    };
}

const outPut=analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(outPut);
