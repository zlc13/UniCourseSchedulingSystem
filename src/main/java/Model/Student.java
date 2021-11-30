package Model;

public class Student {
    private  String student_num;
    private  String password;
    private  String bj_nb;
    private  String bj_na;
    private  String major;
    private  String grade;

    public String getBj_nb() {
        return bj_nb;
    }

    public void setBj_nb(String bj_nb) {
        this.bj_nb = bj_nb;
    }

    public String getBj_na() {
        return bj_na;
    }

    public void setBj_na(String bj_na) {
        this.bj_na = bj_na;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

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
                ", bj_nb='" + bj_nb + '\'' +
                ", bj_na='" + bj_na + '\'' +
                ", major='" + major + '\'' +
                ", grade='" + grade + '\'' +
                '}';
    }

    public Student() {
    }

}
