package Dao.service;

import Model.Student;

import java.io.IOException;


public interface ServicesDao {
    public Student LgUserItem(String student_num, String password) throws IOException;



}
