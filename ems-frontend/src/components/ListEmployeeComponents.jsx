import React, { useEffect, useState } from 'react'
import { deleteEmployees, listEmployees } from '../services/EmployyeeServices'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponents = () => {

 const [employees, setemployees] = useState([])

 const navigator = useNavigate();

   useEffect( () => {

    getAllEmployees();
    
   }, [])

   function getAllEmployees() {

    listEmployees().then((response) => {
        setemployees(response.data);
    }).catch(Error => {
        console.log(Error);
    })

   }

   function addNewEmployee () {
     navigator('/add-employees')
   }

   function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
   }

   function deleteEmployee(id){
    console.log(id);

    deleteEmployees(id).then(reponse => {

        getAllEmployees();

    }).catch(error => {
        console.error(error);
    })

   }

  return (

    <div className='container '>
        <h2 className='text-center'>List of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add employees</button>

        <table className='table table-striped table-borderd outer-border-table'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee email id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                             <td>{employee.email}</td>
                             <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}
                                 style={{margin: '10px'}}
                                    >Delete</button>
                             </td>

                        </tr>)
                    
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents