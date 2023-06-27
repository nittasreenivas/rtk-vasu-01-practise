import React from 'react'
import { useDeleteEmployeeByIdMutation, useGetAllEmployeesQuery } from '../../services/employeesApi'
import { Link } from 'react-router-dom'
// import  { useState } from 'react';
function Employee() {
   var {isLoading,data} =  useGetAllEmployeesQuery()
   console.log("data::",data,isLoading)
  var [deleteEmployee] =  useDeleteEmployeeByIdMutation()
//   const [editEmployee, setEditEmployee] = useState(null);
  return (
    <div>
        <Link to="/addEmployee">
        <button> Add Employee </button>
        </Link>
        <h3>Employees</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
            ):(
                <div className='m-5'>
                    <table border="1" cellPadding={10} align='center'>
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                       <tbody>
                        {
                            data.map((d,i) => {
                                return(
                                    <tr key={i}>
                                        <td>{d.firstname}</td>
                                        <td>{d.lastname}</td>
                                         <td>{d.age}</td>
                                         <td>
                                            <button className='btn btn-sm btn-danger' onClick={() =>deleteEmployee(d.id)}>del</button>
                                         </td>
                                         <td>
                                            <Link to={`/editEmp/${d.id}`}>
                                            <button className='btn btn-sm btn-warning'>Edit</button>
                                            </Link>
                                         </td>
                                    </tr>
                                )
                            })
                        }
                       </tbody>
                    </table>
                    </div>
            )
        } 
          
    </div>
  )
}

export default Employee