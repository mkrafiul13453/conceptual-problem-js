function analyzeMarks(marksObj) {
    let total = 0;
    let highest = null;
    let lowest = null;
    let highSubject = "";
    let lowSubject = "";
    let count = 0;

    for (let subject in marksObj) {
        let mark = marksObj[subject];
        total += mark;
        count++;

        if (highest===null || mark > highest) {
            highest = mark;
            highSubject = subject;
        }

        if (lowest === null || mark < lowest) {
            lowest = mark;
            lowSubject = subject;
        }
    }

    let average = total / count;

    return {
        total: total,
        average: average,
        highest: highSubject,
        lowest: lowSubject
    };
}

const outPut=analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(outPut);
