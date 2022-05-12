class Car {
    constructor(brand,model,price,year) {
        this.Brand=brand;
        this.Model=model;
        this.Price=price;
        this.Year=year;
    }
  }

  

  class CarStore{
    constructor(){
         this.cars = [];}
        AddCar = function(car){
            this.cars[this.cars.length] = car;
        }
    
  }

  let cs = new CarStore();
  let num = prompt("How many cars do you want to add?");

  let i =0;
   do{
    let brand;
    let model;
    let price;
    let year;

    do{
        brand = prompt("Enter brand of car:");
    } while(!isNaN(brand));
    do{
        model = prompt("Enter model of car:");
    } while(!isNaN(model));
    do{
        price = prompt("Enter price of car:");
    } while(isNaN(price));
    do{
        year = prompt("Enter year of car:");
    } while(isNaN(year));

    let car1 = new Car(brand,model,price,year);
    cs.AddCar(car1);
    i++;
   } while(i<num);


for(let i=0;i<cs.cars.length;i++){
    console.log(cs.cars[i]);
}