package service;

import Model.Bjks;
import Model.JS;
import Model.Student;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;


public interface StudentService {
    //郭州
    //查询登录
    public Student LgUserItem(String student_num, String password) throws IOException;
    //查询该学生班级信息
    public List<Student> ClassUserItem(String student_num ) throws IOException;
    //查询课表
    public List<Bjks> FindClass(String student_num ) throws IOException;
    //查询教室信息
    public JS FindClasspot(int js_nb ) throws IOException;
    //查询学生详细信息
    public Student StudentId(String student_num);
    //修改学生信息
    public void Studentupdate(Student student);

}
