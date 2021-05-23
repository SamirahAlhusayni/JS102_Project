/*
    Tuwaiq .NET Bootcamp - Javascript 102 Project
    Trainer Hatem Alsalman
    Trainee Samirah Alhusayni
    Group diriyah
*/


// Create class for Vehicles
class Vehicles {
    constructor (vname,company, ID)
    {
        this.vname= vname;
        this.company = company;
        this.ID=ID;
    }
}

// Create class for Car
class Car extends Vehicles {
    
    constructor (vname,company, ID,carType)
    {
        super(vname,company, ID);
        carType = this.carType;
    }
}

// Create class for Plane
class Plane extends Vehicles {
    constructor (vname,company, ID,PlaneType)
    {
        super(vname,company, ID);
        PlaneType = this.PlaneType;
    }
}
// Create class for employee 
class Employee  {
    constructor (ename,ID, birthdate)
    {
        this.ename= ename;
        this.ID = ID;
        this.birthdate=birthdate;
    }
}
// Create class for Driver 

class Driver extends Employee 
{
    constructor (ename,ID, birthdate,licenseID)
    {
        super(ename,ID, birthdate)
        this.licenseID= licenseID;
    }
}
// Create class for Pilot 

class Pilot extends Employee
{
    constructor(ename,ID, birthdate,licenseID)
    {
        super(ename,ID, birthdate)
        this.licenseID=licenseID;
    }
}

// Create class for Reservation
class Reservation {
    constructor(employeeId ,vehiclesId, reservationID)
    {
        this.employeeId= employeeId;
        this.vehiclesId= vehiclesId;
        this.reservationID= reservationID;
        this.reservationDate= new Date().getDate();;

    }  
    

}
// creat 3 objects from car 
let car1 = new Car ('camry', 'toyota', 1211, 'electric');
let car2 = new Car ('avalon', 'toyota', 3433, 'gas');
let car3 = new Car ('yaris', 'toyota', 6788, 'gas');
// create 3 objects from Plan 
let plan1 = new Plane ('Business Jet', 'Boeing', 3489, 'gas');
let plan2 = new Plane ('AEW&C', 'Boeing ', 8743, 'electric');
// create 2 objects from driver
let driver1 = new Driver ('Mustafa', 321, '2000-09-02','ca3393');
let driver2 = new Driver ('Fahad', 873, '2002-05-18','ca3298');
let driver3 = new Driver ('Saad', 673, '2002-05-20','ca7722');
//create 2 objects from pilot
let pilot1 = new Pilot ('Ali', 212, '1999-10-08', 'ca622');
let pilot2 = new Pilot ('Mohammed', 589, '2001-02-01', 'ca922');
// reserve array to store all reservation

let reserve =[];
const resCheck= function (vehicles,employee){
    
    if((vehicles instanceof Car && employee instanceof Driver) || 
    (vehicles instanceof Plane &&  employee instanceof Pilot)){

        reservation = new Reservation (employee.ID, vehicles.ID, Math.floor(Math.random() * 3)*100 +'ca');
        reserve.push(reservation);
    }

    else
    {
        console.log(` This employee is not compatible to drive this vehicle`);
    }

} 
resCheck(car2,pilot2);

resCheck(plan2,pilot2);

resCheck(plan1,pilot1);

/* print the reserve array by map function
(reserve.map(function (val)
{console.log(val);
}));
*/

//قم بطباعة محتوى المصفوفة من خلال استخدامك للدالة map.

reserve.map((res, i) => {
    console.log(
     
        'Reservation Id: ' +  res.reservationID + '\tReservation Date: ' + res.reservationDate +'\n'
    )
  })












