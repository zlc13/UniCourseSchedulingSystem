package mapper;

import Model.*;

import java.util.List;

public interface AdminMapper {

    //查找所有班级合集
    public List<BJ> findAllClass();

    //查找该班级课程合集
    public List<Bjks> findAllClassTime();

    //查找该班级课程合集
    public List<JS> findAllJS();

    //更新排完课后的数据
    public void updateCourse(Bjks bjks);

    //登录判断
    public Admin findAdmin(Admin admin);

    //查找所有教室信息
    public List<JsStatus> AllJs();

    //通过教室名查找教室信息
    public List<JsStatus> IdJsStatus(JsStatus jsStatus);

    //通过day和time查找教室信息
    public List<JsStatus> DayandTimeJsStatus(JsStatus jsStatus);

    //查找所有教室信息
    public List<JsStatus> FindAllJs();

    //插入学生课表信息
    public void InsertBjks(Bjks bjks);

    //插入老师课表信息
    public void InsertTrks(Trjs bjks);

    //修改教室状态
    public void updateJsStatus(JsStatus jsStatus);

    //添加学生信息
    public void AddStudent(Student student);

    //添加教师信息
    public void AddTeacher(Teacher teacher);

    //添加班级信息
    public void AddBjData(BjData bjData);

    //添加教室信息
    public void AddJsDta(JS js);

    //添加班级上课课程
     public void AddClassCourse(Bjks bjks);
    //通过班级课时编号查找班级课时
    public List<Bjks> IdfindCourse(Bjks bjks);
    //通过教师课时编号查找教师课时
    public List<Trjs> IdfindTeacherCourse(Trjs trjs);
    //判断课程编号和课程名是否匹配
    public List<Course> NumberAndNameCourse(Course course);
    //通过编号查询是否有此学生
    public List<Student> ThroughIdStudent(Student student);
    //通过编号查询是否有此教师
    public List<Teacher> ThroughIdTeacher(Teacher teacher);
    //通过编号查询是否有此班级
    public List<BjData> ThroughIdBjData(BjData bjData);
    //通过编号查询是否有此教师
    public List<JS> ThroughIdJsStatus(JS js);
}
