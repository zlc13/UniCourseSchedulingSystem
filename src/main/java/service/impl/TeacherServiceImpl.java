package service.impl;

import Model.*;
import mapper.StudentMapper;
import mapper.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import service.TeacherService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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

    @Override
    public List<BJ> TeachingClass(String tr_nb) throws IOException {
        Teacher teacher1 = new Teacher();
        teacher1.setTr_nb(tr_nb);
        List<Tr_class> trClassList=teacherMapper.findTeachClass(teacher1);
        System.out.println(trClassList+"tttttt");
        List<BJ> bjList=new ArrayList<>();
        //查出每个班级的详细信息
        for(Tr_class value:trClassList) {
             BJ bj=new BJ();
            bj.setBj_nb(value.getBj_nb());

            bjList.add(teacherMapper.findClass(bj));

        }
        return bjList;
    }

    //查询教师授课具体实现
    @Override
    public List<Trjs> CourseByTeacher(String tr_nb) throws IOException {
            Teacher teacher = new Teacher();
            teacher.setTr_nb(tr_nb);
            List<Trjs> trjsList = teacherMapper.findTeacherCourse(teacher);
            return trjsList;
        }

    @Override
    public JS FindClasspot(int js_nb) throws IOException {
        JS js=new JS();
        js.setJs_nb(js_nb);
        JS js1=teacherMapper.findClasspot(js);
        return js1;
    }
    //通过Id查询教师
    @Override
    public Teacher ThroughIdTeacher(String tr_nb) {
        Teacher teacher = new Teacher();
        teacher.setTr_nb(tr_nb);
        Teacher teacherresult = new Teacher();
        teacherresult = teacherMapper.IdTeacherfind(teacher);
        return teacherresult;
    }
    //更新教师
    @Override
    public void Teacherupdate(Teacher teacher) {
        teacherMapper.updateTeacher(teacher);
    }

    @Override
    public List<Student> ClassInfo(String bj_nb) throws IOException {

        BJ bj=new BJ();
        bj.setBj_nb(bj_nb);

        List<Student> studentList= teacherMapper.findClassinfo(bj);

        return studentList;
    }
}

