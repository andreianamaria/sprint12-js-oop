import Car from './oop.js';

class RaceCar extends Car {
  constructor(brand, model, color, distance) {
    super(brand, model, color, distance);
  }

  championshipParticipation(position) {
    if (position <= 0) {
      return `Nu am castigat niciun premiu :(.`;
    }
    return `Am castigat locul ${position}`;
  }
}

const raceCar = new RaceCar('Suzuki', 'Swift', 'Red', '1000');
console.log(raceCar.getCarDetails());
console.log(raceCar.championshipParticipation(1));
console.log(raceCar.championshipParticipation(0));