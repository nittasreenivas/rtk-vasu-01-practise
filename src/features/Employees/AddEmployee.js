import React from 'react'
import {useState} from "react"
import { useAddNewEmployeeMutation } from '../../services/employeesApi'
function AddEmployee() {
    const [newEmployee,setNewEmployee] = useState({
        firstname:'',
        lastname:'',
        age:''
    })
   var [newEmp] =  useAddNewEmployeeMutation()
    const handleFirstname = (e) => {
        setNewEmployee({...newEmployee,firstname:e.target.value})
    }
    const handleLastname = (e) => {
        setNewEmployee({...newEmployee,lastname:e.target.value})
    }
    const handleAge = (e) => {
        setNewEmployee({...newEmployee,age:e.target.value})
    }
    // const addEmployee = () => {
    //     newEmp(newEmployee).then(() => {
    //         setNewEmployee({ firstname: '', lastname: '', age: '' });
    //       });
    // }
    const addEmployee = () => {
        newEmp(newEmployee).then(() => {
            setNewEmployee({firstname:'',lastname:'',age:''})
        })
    }
  return (
    <div>
        <h3>AddEmployee</h3>
        <div>
            <input type="text" placeholder='enter firstname' name="firstname" value={newEmployee.firstname} onChange={handleFirstname}/> <br/>
            <input type="text" placeholder='enter lastname' name="lastname" value={newEmployee.lastname} onChange={handleLastname}/> <br/>
            <input type="text" placeholder='enter age' name="age" value={newEmployee.age} onChange={handleAge}/> <br/>
            <button onClick={addEmployee}>add Employee</button>
        </div>
    </div>
  )
}

export default AddEmployee