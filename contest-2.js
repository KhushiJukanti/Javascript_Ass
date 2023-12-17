let employees = [];


function insertEmployee(id, name, age, salary) {
    employees.push({ id, name, age, salary });
    console.log(`Employee with ID ${id} has been inserted.`);
}


function displayEmployees() {
    console.log("Employee List:");
    employees.forEach(employee => {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`);
    });
}


function removeEmployeeById(id) {
    employees = employees.filter(employee => employee.id !== id);
    console.log(`Employee with ID ${id} has been removed.`);
}


function updateEmployeeById(id, name, age, salary) {
    employees = employees.map(employee => {
        if (employee.id === id) {
            employee.name = name || employee.name;
            employee.age = age || employee.age;
            employee.salary = salary || employee.salary;
        }
        return employee;
    });
    console.log(`Employee with ID ${id} has been updated.`);
}


function findMaxSalaryEmployee() {
    const maxSalaryEmployee = employees.reduce((max, employee) => (employee.salary > max.salary) ? employee : max, employees[0]);
    console.log(`Employee with maximum salary: ID - ${maxSalaryEmployee.id}, Name - ${maxSalaryEmployee.name}, Salary - ${maxSalaryEmployee.salary}`);
}


function findMinSalaryEmployee() {
    const minSalaryEmployee = employees.reduce((min, employee) => (employee.salary < min.salary) ? employee : min, employees[0]);
    console.log(`Employee with minimum salary: ID - ${minSalaryEmployee.id}, Name - ${minSalaryEmployee.name}, Salary - ${minSalaryEmployee.salary}`);
}

insertEmployee(1, "Khushi", 30, 50000);
insertEmployee(2, "Ishu", 25, 60000);
insertEmployee(3, "user", 35, 55000);

displayEmployees();

removeEmployeeById(2);

updateEmployeeById(1, "khushi Updated", 32, 52000);

findMaxSalaryEmployee();

findMinSalaryEmployee();
