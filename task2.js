let quantityMan = 1;
let countHandShake = 0;

while (quantityMan <= 10) {
  countHandShake += quantityMan - 1;
  quantityMan++;
}

console.log(`Количество рукопожатий - ${countHandShake}`);
