package service;


import Model.Teacher;

import java.io.IOException;

public interface TeacherService {
    //查询登录
    public Teacher LgTeacherItem(String tr_nb, String tr_password) throws IOException;
}
