package Model;

public class Student {
    private  String student_num;
    private  String password;

    public String getStudent_num() {
        return student_num;
    }

    public void setStudent_num(String student_num) {
        this.student_num = student_num;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Student{" +
                "student_num='" + student_num + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public Student() {
    }

}
