package Dao.impl;

import Dao.service.StudentDao;
import Model.Student;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;


import java.io.IOException;
import java.io.InputStream;

public class StudentDaoImpl implements StudentDao {
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
}
