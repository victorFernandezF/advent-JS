function fitsInOneBox(boxes) {
    let sortedBoxes = sortBoxes(boxes);
    for (let i = 0; i < sortedBoxes.length - 1; i++) {
        if (sortedBoxes[i].l >= sortedBoxes[i + 1].l)
            return false;
        if (sortedBoxes[i].w >= sortedBoxes[i + 1].w)
            return false;
        if (sortedBoxes[i].h >= sortedBoxes[i + 1].h)
            return false;
    }
    return true;
} 

function sortBoxes(boxes){
    boxes.sort(function(a, b) { return a.l - b.l && a.w - b.w && a.h - b.h });
    return boxes;
    //console.log(boxes)
}

//    TESTS 
const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes)) // true