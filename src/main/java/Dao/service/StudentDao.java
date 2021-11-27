package Dao.service;

import Model.Student;

import java.io.IOException;


public interface StudentDao {
    public Student LgUserItem(String student_num, String password) throws IOException;



}
