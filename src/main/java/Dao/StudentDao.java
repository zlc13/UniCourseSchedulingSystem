package Dao;

import Model.Student;

import java.io.IOException;
import java.util.List;


public interface StudentDao {

    public Student LgUserItem(String student_num, String password) throws IOException;

    public List<Student> ClassUserItem(Student student ) throws IOException;

    public Student UserItem(String student_num ) throws IOException;



}
