import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployees, updateEmployee } from '../services/EmployyeeServices'
import { useNavigate,useParams } from 'react-router-dom'

const EmpoyeeComponents = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const {id} = useParams();

  const navigator = useNavigate();

  useEffect(()=> {

    if(id){
      getEmployees(id).then((reponse) => {

        setFirstName(reponse.data.firstName);
        setLastName(reponse.data.lastName);
        setEmail(reponse.data.email);

      }).catch(errors =>{
        console.log(errors);
      })
    }

  }, [id])

   

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (ValidateForm()) {

       const employee = { firstName, lastName, email }
      console.log(employee);

      if(id){
         updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
         }).catch(errors => {
          console.error(errors);
         })
      } else {

        createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator('/employees')
      }).catch(errors => {
        console.log(errors);
      })

      }

        
    }
  }

  function ValidateForm() {

    let valid = true;

    const errorCopy = { ...errors }

    if (firstName.trim()) {
      errorCopy.firstName = '';
    } else {
      errorCopy.firstName = 'First name is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = '';
    } else {
      errorCopy.lastName = 'Last name is required';
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = '';
    } else {
      errorCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
        return  <h2 className='text-center'>Update Employee</h2>
    } else {
       return  <h2 className='text-center'>Add Employee</h2>
    }
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form >
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input
                  type='text'
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                 {errors.firstName && (
                    <div className='invalid-feedback'>
                   {errors.firstName}
                </div>
                 )}

              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Employee Last Name'
                  name='LastName'
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                 {errors.lastName && (
                   <div className='invalid-feedback'>
                    {errors.lastName}
                     </div>
                 )}
                
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type='text'
                  placeholder='Enter Employee Email'
                  name='Email'
                  value={email}
                   className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 {errors.email && (
                      <div className='invalid-feedback'>
                     {errors.email}
                      </div>
                )}
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpoyeeComponents
