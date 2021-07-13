let cars = [
    { Model : "Camry", Make : "Toyota", Year: 2019, Vin: 7676, classifc :["Two-seaters", "Sport"]},
    { Model : "Cargo", Make : "Ford", Year: 2017, Vin: 675, classifc:["Four-seaters","Compact","Suv"]},
    { Model : "Altima", Make : "Nissan", Year: 2020,Vin: 8015, classifc :["Four-seaters", "Pickup"]},
    { Model : "Express", Make : "Chevrolet", Year: 2015,Vin: 9059, classifc: ["Two-seaters", "Van"]},
    { Model : "Wagoneer", Make : "jeep", Year: 2015,Vin: 989, classifc: ["Four-seaters", "big Suv"]}
    ];


        // for(let i=0; i<cars.length;i++){
        //     console.log(cars[i])

        // }
       
    let getAll = () =>{
            return cars ;
        }
        console.log(getAll());
        
    let getItem =(Vin) =>{
        return cars.find(car =>car.Vin === Vin) 

    }
   console.log(getItem(989))
   


// // with that export we can create anothr file to call 
module.exports = {getAll, getItem} 

