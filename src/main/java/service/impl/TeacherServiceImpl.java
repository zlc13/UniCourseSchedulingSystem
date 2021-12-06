package service.impl;

import Model.Student;
import Model.Teacher;
import mapper.StudentMapper;
import mapper.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import service.TeacherService;

import java.io.IOException;

public class TeacherServiceImpl implements TeacherService {
    @Autowired
    private TeacherMapper teacherMapper;//mapper映射类

    @Override
    public Teacher LgTeacherItem(String tr_nb, String tr_password) throws IOException {
        Teacher teacher1 = new Teacher();
        teacher1.setTr_nb(tr_nb);
        teacher1.setTr_password(tr_password);
        Teacher teacher=teacherMapper.findTeacher(teacher1);
//        Student student=studentDao.LgUserItem(student_num,password);
        return teacher;
    }
}
