# AngularSwapi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15+

## Setup

### Mocks

1. Go to angular-swapi/mocks
2. run `npm ci`
3. run `npm run start`

### Angular app

1. run `npm ci`
2. Use `npm run start` for starting the serve. The app is available on: http://localhost:4200/


## Assessment

1. Peform a request to People API and Planets API. => get by ID
2. Show the contents on the app:
   1. People: Name and Gender
   2. Planes: Name and Population
3. Now, request 02 people and 02 planets at the same time.
   1. Ex: getPeople() returns => [people1, people2]
4. Show the People and Planet only when BOTH requests are loaded.
   1. ex: getData()
      1. Returns {listOfPeople, listOfplanets}
