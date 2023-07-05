class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getFormattedString(): string {
    return `${this.make} ${this.model} (${this.year})`;
  }
}

// Create an instance of the Car class
const car = new Car("Toyota", "Camry", 2022);

// Test the getFormattedString method
console.log(car.getFormattedString()); // Output: Toyota Camry (2022)

