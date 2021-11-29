package service.impl;

import Dao.StudentDao;
import Dao.impl.StudentDaoImpl;
import Model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import service.StudentService;

import java.io.IOException;

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





}
