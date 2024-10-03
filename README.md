# Acme Employees

The Acme Company wants to create an application that allows them to manage their employees. You are tasked with creating the proof-of-concept API with placeholder data.

## Instructions

`employees.js` contains the data that this API will be using. Complete `server.js` to serve the following endpoints:

- `GET /` sends the string `"Hello employees!"`
- `GET /employees` sends the array of employee names
- `GET /employees/:name` sends `true` or `false` depending on whether the given employee exists in the array
- `POST /employees/:name` adds the new employee to the array
- `GET /employees/random` sends a random employee from the array

## Submission

Submit the link to your public GitHub repository.
