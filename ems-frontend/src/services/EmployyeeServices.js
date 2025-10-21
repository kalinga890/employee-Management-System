import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employee';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee)

export const getEmployees = (employeeeId) => axios.get(REST_API_BASE_URL + '/' + employeeeId);

export const updateEmployee = (employeeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeeId, employee);

export const deleteEmployees = (employeeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeeId);