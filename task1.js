const distance = 100;
let totalDistance = 0;
let countDays = 0;

while (totalDistance < distance) {
  countDays++;
  if (countDays > 1) {
    totalDistance -= 30;
  }
  totalDistance += 50;
}

console.log(`Черепашка залезет на холм на ${countDays} сутки!`);
