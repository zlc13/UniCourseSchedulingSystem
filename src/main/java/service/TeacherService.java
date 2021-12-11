package service;


import Model.*;

import java.io.IOException;
import java.util.List;

public interface TeacherService {
    //查询登录
    public Teacher LgTeacherItem(String tr_nb, String tr_password) throws IOException;
    //查询老师所教班级
    public List<BJ> TeachingClass(String tr_nb) throws IOException;
    //查询教师授课数据
    public List<Trjs> CourseByTeacher (String tr_nb) throws IOException;
    //查询教室信息
    public JS FindClasspot(int js_nb ) throws IOException;
    //通过Id查询教师
    public Teacher ThroughIdTeacher(String tr_nb);
    //更新教师资料
    public void Teacherupdate(Teacher teacher);
    //查看所教班级详细信息
    public List<Student> ClassInfo(String bj_nb ) throws IOException;



}
