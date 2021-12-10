package mapper;

import Model.*;

import java.io.IOException;
import java.util.List;

public interface TeacherMapper {
    //查询老师登录是否符合要求
    public Teacher findTeacher(Teacher teacher);
    //查询该名老师所教班级
    public List<Tr_class> findTeachClass(Teacher teacher);
    //查询班级详细信息
    public BJ findClass(BJ bj);
    //教师授课
    public List<Trjs> findTeacherCourse(Teacher teacher);
    //教室详细信息
    public JS findClasspot(JS js);
    //Through id search teacher data
    public Teacher IdTeacherfind(Teacher teacher);
    //Update teacher data
    public void updateTeacher(Teacher teacher);
    //查找个人班级合集函数
    public List<Student> findClassinfo(BJ bj);

}
