package in.kalinga.ems.controller;

import in.kalinga.ems.dto.EmployeeDto;
import in.kalinga.ems.services.EmployeeServices;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    private EmployeeServices employeeServices;

    // Build Rest Api Post method

     @PostMapping
    public ResponseEntity<EmployeeDto> creteEmployee( @RequestBody  EmployeeDto employeeDto){

      EmployeeDto savedEmployee = employeeServices.createEmployee(employeeDto);

      return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Build Rest Api Get method using employeeId

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById (@PathVariable("id") Long employeeId){

       EmployeeDto employeeDto = employeeServices.getEmployeeId(employeeId);

       return ResponseEntity.ok(employeeDto);
    }

    // Build Api get all method

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployee(){

       List<EmployeeDto> employees= employeeServices.getAllEmployee();

       return ResponseEntity.ok(employees);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updatedEmployees(@PathVariable("id")
                                                              Long employeeId,  @RequestBody EmployeeDto updatedEmployee){

       EmployeeDto employeeDto = employeeServices.updateEmployee(employeeId,updatedEmployee);

       return ResponseEntity.ok(employeeDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String>  deleteEmployee(@PathVariable("id") Long employeeId){

         employeeServices.deleteEmployee(employeeId);

         return ResponseEntity.ok("EmployeeId deleted successfully..!");
    }

}
