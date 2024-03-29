# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT of your choice`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": "+05:30"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```


## DB Design
 # Table
  - Airplane 
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
### Airplane-> modelNumber, capacity
### Flight-> flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime,price,boardingGate,totalSeats
Relationship -> Airplane has many flights and flight belongs to a airplane (one to many)

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer,createdAt:date,updatedAt:date

npx sequelize model:generate --name City --attributes name:String,createdAt:date,updatedAt:date

npx sequelize model:generate --name Flight --attributes flightNumber:String, airplaneId:integer, departureAirportId:integer, arrivalAirportId:integer, arrivalTime:date, departureTime:date,price:integer,boardingGate:string,totalSeats:integer

npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer,createdAt:date,updatedAt:date

```

