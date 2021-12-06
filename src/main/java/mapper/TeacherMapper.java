package mapper;

import Model.Student;
import Model.Teacher;

public interface TeacherMapper {
    //查询老师登录是否符合要求
    public Teacher findTeacher(Teacher teacher);

}
