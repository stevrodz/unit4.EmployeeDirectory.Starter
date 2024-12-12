const express = require("express");
const app = express();
const PORT = 3000;
const employees = require("./employees"); 

const init = async () => {
  app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
};

app.get("/", async (req, res) => {
  res.status(200).send("Hello employees");
});

app.get("/hello", async (req, res) => {
  res.status(200).send("This is our backend, hello");
});

app.get("/employees", async (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/random", async (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  
  res.status(200).json(randomEmployee);
});

app.get("/employees/:userid", async (req, res) => {
    const id = Number(req.params.userid);
    const filteredArray = employees.filter((employee) => employee.id === id);
    
    if (filteredArray.length === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
  
    res.status(200).json(filteredArray[0]);
  });
  
init();
// TODO: this file :)
