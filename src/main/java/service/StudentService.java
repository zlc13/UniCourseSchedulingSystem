package service;

import Model.Student;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;


public interface StudentService {

    //查询登录
    public Student LgUserItem(String student_num, String password) throws IOException;
    //查询该学生班级信息
    public List<Student> ClassUserItem(String student_num ) throws IOException;
}
