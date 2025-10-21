package in.kalinga.ems.services.impl;

import in.kalinga.ems.dto.EmployeeDto;
import in.kalinga.ems.entity.Employee;
import in.kalinga.ems.exception.ResourcesNotFoundException;
import in.kalinga.ems.mapper.EmployeeMapper;
import in.kalinga.ems.repository.EmployeeRepository;
import in.kalinga.ems.services.EmployeeServices;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServicesImp implements EmployeeServices {

     private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeId(Long employeeId) {
       Employee employee = employeeRepository.findById(employeeId)
                 .orElseThrow(() -> new ResourcesNotFoundException("Employee is not exist with given id " +employeeId));

        return  EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
      List<Employee> employees = employeeRepository.findAll();
        return  employees.stream().map((employee -> EmployeeMapper.mapToEmployeeDto(employee))).toList();
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(
                        () -> new ResourcesNotFoundException(" given employeeId not exist: " + employeeId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeesObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeesObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourcesNotFoundException("Employee is not exist with given id " + employeeId));

        employeeRepository.deleteById(employeeId);

    }
}
