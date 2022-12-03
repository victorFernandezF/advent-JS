function distributeGifts(packOfGifts, reindeers) {
    let giftSize = getGiftsWeight(packOfGifts);
    let reindeersCapacity = getReindeersCapacity(reindeers);
    return Math.floor(reindeersCapacity / giftSize);
}

function getReindeersCapacity(reindeers){
    let capacity = 0;
    reindeers.forEach(element=>{
        capacity = capacity + element.length * 2; 
    });
    return capacity;
}

function getGiftsWeight(gifts){
    let weight = 0;
    gifts.forEach(element => {
        weight += element.length;
    });
    return weight;
}

const packOfGifts = ["libro", "pelota"]
const reindeers = ["rodolfo", "pepe"]
