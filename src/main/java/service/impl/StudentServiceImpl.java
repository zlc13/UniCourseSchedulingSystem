package service.impl;

import Model.Bjks;
import Model.JS;
import Model.Student;
import mapper.StudentMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.StudentService;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service("studentService")
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentMapper studentMapper;//mapper映射类

    //具体登录实现方法
    @Override
    public Student LgUserItem(String student_num, String password) throws IOException {

        Student student1 = new Student();
        student1.setStudent_num(student_num);
        student1.setPassword(password);
        Student student=studentMapper.findStu(student1);
//        Student student=studentDao.LgUserItem(student_num,password);
        return student;

    }

    //具体查找个人班级实现方法
    @Override
    public List<Student> ClassUserItem(String student_num) throws IOException {

        Student student=new Student();
        student.setStudent_num(student_num);

        Student student1=studentMapper.findItem(student);

        System.out.println("impl"+student);
        List<Student> studentList = studentMapper.findClass(student1);

        return studentList;
    }

    @Override
    public List<Bjks> FindClass(String student_num) throws IOException {

        Student student=new Student();
        student.setStudent_num(student_num);
        Student student1=studentMapper.findItem(student);

        List<Bjks> bjksList = studentMapper.findCourse(student1);

        return bjksList;
    }

    @Override
    public JS FindClasspot(String js_nb) throws IOException {
        JS js=new JS();
        js.setJs_nb(js_nb);
        JS js1=studentMapper.findClasspot(js);
        return js1;
    }

    @Override
    public Student StudentId(String student_num) {
        Student student=new Student();
        student.setStudent_num(student_num);
        return studentMapper.findItem(student);
    }

}
