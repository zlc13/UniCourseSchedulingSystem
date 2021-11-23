package mapper;

import Model.Student;

import java.util.ArrayList;

public interface StudentMapper {
    public ArrayList<Student> findStu(Student student);
}
