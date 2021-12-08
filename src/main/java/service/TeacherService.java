package service;


import Model.BJ;
import Model.JS;
import Model.Teacher;
import Model.Trjs;

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
    public JS FindClasspot(String js_nb ) throws IOException;
    //通过Id查询教师
    public Teacher ThroughIdTeacher(String tr_nb);
    //更新教师资料
    public void Teacherupdate(Teacher teacher);


}
