function fitsInOneBox(boxes) {
    let result = false;
    let newBoxes = simplifyArray(boxes);
    let sortedArray = sortArray(newBoxes);
    for (let i = 0; i < sortedArray.length - 1; i++) {
        result = doesBoxFitInAnotherBox(sortedArray[i].toString(), sortedArray[i + 1].toString());
        if (!result)
            return false;
    }
    return result;
}

function doesBoxFitInAnotherBox(item1, item2){
    let i = 0;
    while (i < 2) {
        console.log(item1[i],">=", item2[i])
        if (item1[i] >= item2[i])
            return false;
        i++;
    }
    return true;
}

function sortArray(arrayToSort){
    let sortedArray = arrayToSort.sort(function(a, b){return a - b});
    return sortedArray;
}

function simplifyArray(boxes){
    let newArray = [];
    boxes.forEach(element => {
        newArray.push(Number(`${element.l}${element.w}${element.h}`));
    });
    return newArray;
}


//    TESTS 
const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 4, h: 1 },
    { l: 5, w: 6, h: 21 }
]

console.log(fitsInOneBox(boxes)) // false