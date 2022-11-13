// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CRUD {
    struct Employee {
        string name;
        string email;
        uint age;
        address walletAddress;
    }

    // 1. array of employees and getting of a employee detail
    Employee[] public employees;
    uint public totalNoOfEmployees;

    // function for comparing two string
    function compareEmployeeEmail (string memory a, string memory b) internal pure returns(bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }  

    // 2. adding of a employee to array of employees
    function addEmployee (string memory _name, string memory _email, uint _age, address _walletAddress) public {
        Employee memory employee = Employee(_name, _email, _age, _walletAddress);
        employees.push(employee);
        totalNoOfEmployees++;
    }

    // 3. editing details of the existing employee
    function editEmployeeDetail (string memory _email, string memory _name) external returns (bool) {
        for (uint i = 0; i < totalNoOfEmployees; i++) {
            if (compareEmployeeEmail(employees[i].email, _email)) {
                employees[i].name = _name;
                return true;
            }
        }

        return false;
    }

    // 4. deletion of a existing employee
    function deleteEmployee (string memory _email) external returns (bool) {
        require(totalNoOfEmployees > 0, "No employee in employees list");
        for (uint i = 0; i < totalNoOfEmployees; i++) {
            if (compareEmployeeEmail(employees[i].email, _email)) {
                // shift last employee to the current index and delete last employee.
                // NOTE: position of employee will change but position does not matter.
                employees[i] = employees[totalNoOfEmployees - 1]; // last employee to the current index
                delete employees[totalNoOfEmployees - 1]; // delete last employee

                totalNoOfEmployees--;
                return true;
            }
        }

        return false;
    }
}