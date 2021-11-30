package service.impl;

import Dao.StudentDao;
import Dao.impl.StudentDaoImpl;
import Model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.StudentService;

import java.io.IOException;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {


    private StudentDao studentDao;
    public void setStudentDao(StudentDaoImpl studentDao) {
        this.studentDao = studentDao;
    }

    @Override
    public Student LgUserItem(String student_num, String password) throws IOException {

        Student student=studentDao.LgUserItem(student_num,password);
        return student;

    }

    @Override
    public List<Student> ClassUserItem(String student_num) throws IOException {

        Student student=studentDao.UserItem(student_num);

        System.out.println("impl"+student);
        List<Student> studentList = studentDao.ClassUserItem(student);

        return studentList;
    }


}
