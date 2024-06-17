export default class Car {
  constructor(brand, model, color, distance) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.distance = distance;
  }

  getCarDetails() {
    return `Car [brand=${this.brand}, model=${this.model}, color=${this.color}, distance=${this.distance}]`;
  }
}

const main = () => {
  const car1 = new Car('Volvo', 'XC-60', 'Black', '234000');
  const car2 = new Car('Fiat', 'Punto', 'White', '90000');
  const car3 = new Car('Suzuki', 'Swift', 'Red', '1000');
  console.log(car1.getCarDetails());
  console.log(car2.getCarDetails());
  console.log(car3.getCarDetails());
}

main();
