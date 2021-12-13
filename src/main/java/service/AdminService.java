package service;

import Model.*;

import java.io.IOException;
import java.util.List;

public interface AdminService {
    //查询所有班级
    public List<BJ> searchAllClass();
    //自动排课
    public List<Bjks> autoScheduling(String bj_nb);
    //查询登录
    public Admin LgUserItem(String student_num, String password) throws IOException;
    //查询所有教室信息
    public List<JsStatus> FindAllJsStatus();
    public List<JsStatus> FindIdJsStatus(String js_nb);
    //通过Day和TIme查找教室信息
    public List<JsStatus> FindDayandTimeJs(String week,String time,String js_name);
    //插入学生课表信息
    public void InsertintoStudent(Bjks bjks);
    //插入老师课表信息
    public void InsertintoTeacher(Trjs trjs);
    //修改教室状态
    public void JsStatusupdate(JsStatus jsStatus);
    //添加学生
    public void AddStudentData(Student student);
    //添加教师
    public void AddTeachertData(Teacher teacher);
    //添加班级
    public void AddClass(BjData bjData);
    //添加教室
    public void AddDataJs(JS js);
    //添加班级上课科目
    public boolean AddClassCourse(String bj_nb,String c_na, String tr_nb,String bjks_nb);
    //通过Id查找班级课时表
    public List<Bjks> FindIdCourse(Bjks bjks);
    //通过Id查找教师课时表
    public List<Trjs> FindIdTeacherCourse(Trjs trjs);
    //判断课程编号和课程名是否匹配
    public List<Course> CourseNameandNumber(Course course);
    //通过编号查询是否有此学生
    public List<Student> IdStudent(Student student);
    //通过编号查询是否有此教师
    public List<Teacher> IdTeacher(Teacher teacher);
    //通过编号查询是否有此班级
    public List<BjData> IdBjData(BjData bjData);
    //通过编号查询是否有此教室
    public List<JS> IdJs(JS js);
}
