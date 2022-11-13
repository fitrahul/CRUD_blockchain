const hre = require("hardhat");

async function main() {
  // 1. Network address =>
  const accounts = await hre.ethers.getSigners(); // provide many account address
  // console.log(accounts.map((el) => {
  //   el.address;
  // }));

  // 2. deployed the CRUD contract =>
  const CRUD = await hre.ethers.getContractFactory("CRUD");
  const crud = await CRUD.deploy();
  await crud.deployed();
  // console.log("Employee Address :: ", crud.address);

  // 3. deployed contract details filling and getting =>
  const totalEmployees1 = await crud.totalNoOfEmployees();
  const addingEmployee = await crud.addEmployee("Keshari","a@a.com",25,"0x5FbDB2315678afecb367f032d93F642f64180aa3");
  const addingEmployee2 = await crud.addEmployee("Kumar","b@a.com",26,"0x5FbDB2315678afecb367f032d93F642f64180aa3");
  const totalEmployees2 = await crud.totalNoOfEmployees();
  const editEmployee = await crud.editEmployeeDetail("a@a.com","Rahul");
  const deleteEmployee = await crud.deleteEmployee("a@a.com");
  const totalEmployees3 = await crud.totalNoOfEmployees();

  const lastEmployee = await crud.employees(totalEmployees3 - 1);
  console.log(lastEmployee,totalEmployees1,totalEmployees2,totalEmployees3);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
