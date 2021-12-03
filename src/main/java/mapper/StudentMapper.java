package mapper;

import Model.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


public interface StudentMapper {
    //查询学生登录是否符合要求
    public Student findStu(Student student);
    //查找个人班级合集函数
    public List<Student> findClass(Student student);
    //查找个人详细信息
    public Student findItem(Student student);
}
