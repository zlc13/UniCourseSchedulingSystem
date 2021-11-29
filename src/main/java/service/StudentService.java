package service;

import Model.Student;

import java.io.IOException;

public interface StudentService {
    public Student LgUserItem(String student_num, String password) throws IOException;
}
