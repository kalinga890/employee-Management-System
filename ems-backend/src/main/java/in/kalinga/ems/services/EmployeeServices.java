package in.kalinga.ems.services;

import in.kalinga.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeServices {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeId(Long employeeId);

    List<EmployeeDto> getAllEmployee();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);
}
