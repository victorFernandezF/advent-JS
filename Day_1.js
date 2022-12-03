function wrapping(gifts) {
    let wrappedGift = [];
    gifts.forEach(element => {
      let size = element.length + 2;
      let temp = ""; 
      for (let j = 0; j < size ; j++)
        temp = temp + "*";
        temp = temp + "\n";
        temp = temp + "*" +element +"*";
        temp = temp + "\n";
        for (let j = 0; j < size ; j++)
          temp = temp + "*";
        wrappedGift.push(temp);
    });
    return wrappedGift;
}