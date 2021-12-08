package mapper;

import Model.Bjks;
import Model.JS;
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
    //查找班级课表
    public List<Bjks> findCourse(Student student);
    //教室详细信息
    public JS findClasspot(JS js);
    //修改学生个人信息
    public void updateStudent(Student student);

}
