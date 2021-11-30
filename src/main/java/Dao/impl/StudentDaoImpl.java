package Dao.impl;

import Dao.StudentDao;
import Model.Student;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.beans.factory.annotation.Autowired;


import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class StudentDaoImpl implements StudentDao {

    @Autowired
    private StudentDao studentDao;


    @Override
    public Student LgUserItem(String student_num, String password) throws IOException {
        //核心配置文件
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        //获得session对象
         SqlSessionFactory build = new SqlSessionFactoryBuilder().build(resourceAsStream);
         //获得session回话对象
        SqlSession sqlSession = build.openSession();
        
        Student student1 = new Student();
        student1.setStudent_num(student_num);
        student1.setPassword(password);
        Student student = sqlSession.selectOne("mapper.StudentMapper.findStu",student1);

        sqlSession.close();

        return student;


    }

    @Override
    public List<Student> ClassUserItem(Student student) throws IOException {
        //核心配置文件
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        //获得session对象
        SqlSessionFactory build = new SqlSessionFactoryBuilder().build(resourceAsStream);
        //获得session回话对象
        SqlSession sqlSession = build.openSession();

        Student student1 = student;
        System.out.println("当前学生信息"+student1);

        List<Student> studentList = sqlSession.selectList("mapper.StudentMapper.findClass",student1);


        return studentList;
    }

    @Override
    public Student UserItem(String student_num) throws IOException {
        //核心配置文件
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        //获得session对象
        SqlSessionFactory build = new SqlSessionFactoryBuilder().build(resourceAsStream);
        //获得session回话对象
        SqlSession sqlSession = build.openSession();

        Student student1 = new Student();
        student1.setStudent_num(student_num);

        Student student = sqlSession.selectOne("mapper.StudentMapper.findItem",student1);

        sqlSession.close();

        return student;
    }
}
