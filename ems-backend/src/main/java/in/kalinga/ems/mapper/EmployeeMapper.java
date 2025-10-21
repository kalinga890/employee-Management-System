package in.kalinga.ems.mapper;

import in.kalinga.ems.dto.EmployeeDto;
import in.kalinga.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(), // convert employee entity to employeeDto
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),   // convert employeeDto into employee entity
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
