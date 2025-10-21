package in.kalinga.ems.repository;

import in.kalinga.ems.dto.EmployeeDto;
import in.kalinga.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    




}
