let cars = [
    { model : "Camry", make : "Toyota", year: 2019, vin: 7676, type  :["Sport","One row of seats","Front-wheel drive"]},
    { model : "Cargo", make : "Ford", year: 2018, vin: 675, type :["SUV","Three rows of seats","Compact","All-wheel drive"]},
    { model : "Altima", make : "Nissan", year: 2021,vin: 8015, type:["Pickup","One row of seats","All-wheel drive"]},
    { model : "Explore", make : "Chevrolet", year: 2010,vin: 9059, type :["Van","Two rows of seats","All-wheel drive"]},
    { model : "Wrangler", make : "Jeep", year: 2019,vin: 989, type : ["SUV","Three rows of seats","All-wheel drive" ]}
    ];

    const getAll = () =>{
            return cars ;
        };
        // console.log(getAll());
    const getItem =(model) =>{
        return cars.find((car) =>{
            return car.model === model;
        });

    }


export {getAll, getItem}; 
