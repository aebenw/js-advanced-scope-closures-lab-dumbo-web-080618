function produceDrivingRange(num) {
  return function (numOne, numTwo) {
    intOne = parseInt(numOne, 10)
    intTwo = parseInt(numTwo, 10)

    let diff = intOne - intTwo;
    let abso = Math.abs(diff)
    if (abso > num){
      let difference = abso - num;
      return `${difference} blocks out of range`;
    } else if (num > abso){
      let difference = num - abso;
    return `within range by ${difference}`
    }
  }

}

function produceTipCalculator(num) {
  return function (price) {
    return num * price;
  };
};

function createDriver() {
  let ItemId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ItemId;
    };
  };
};
