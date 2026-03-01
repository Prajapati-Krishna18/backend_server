# State Statistics Management API

=> Design and implement a complete REST API using Express.js to manage statistical data of Indian states using an in-memory JSON array.

## Implemented Routes
    1. GET /states :- Return All states
    2. GET /states/:id :- Return single state by ID
    3. GET /states/highest-gdp :- Return the state with the highest GDP
    4. POST /states :- Add a new state record
    5. PUT /states/:id :- Replace entire state record (except id)    
    6. PUT /states/:id/budget :- Replace annualBudget value
    7. PUT /states/:id/population :- Replace population value entirely
    8. PATCH /states/:id/literacy :- Update literacyRate only
    9. PATCH /states/:id/gdp :- Update gdp only
    10. PATCH /states/:id :- Allow updating any provided fields without replacing entire object
    11. DELETE /states/:id :- Delete state by ID
    12. DELETE /states/name/:stateName :- Delete state by name
    13. GET /states/budget/above/:amount :- Return all states where annualBudget is greater than given amount
    14. GET /states/literacy/range/:min/:max :- Return states where literacyRate is between min and maxa

## Sample API URLs 
    http://localhost:5003/states
    http://localhost:5003/states/:id
    http://localhost:5003/states/highest-gdp
    http://localhost:5003/states
    http://localhost:5003/states/:id
    http://localhost:5003/states/:id/budget
    http://localhost:5003/states/:id/population
    http://localhost:5003/states/:id/literacy
    http://localhost:5003/states/:id/gdp
    http://localhost:5003/states/:id
    http://localhost:5003/states/:id
    http://localhost:5003/states/name/:stateName
    http://localhost:5003/states/budget/above/:amount
    http://localhost:5003/states/literacy/range/:min/:max
    http://localhost:5003/states/low-literacy/:percentage

## Steps for Run Locally
    => 1. Clone the Repository
    https://github.com/Prajapati-Krishna18/backend_server.git

    => 2. Navigate into the Project Folder
    cd backend_server

    => 3. Install Dependencies to Run
    npm install

    => 4. Start the Server
    node index.js (file_name)

## Postman Link

    => 

## Deployed Link

=> 