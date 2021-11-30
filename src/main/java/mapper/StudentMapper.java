package mapper;

import Model.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;



public interface StudentMapper {
    public Student findStu(Student student);
}
