package Model;

public class Student {
    private  String student_num;
    private  String password;
    private  String bj_nb;
    private  String bj_na;
    private  String major;
    private  String grade;
    private  String student_name;
    private  String student_email;
    private  String student_academy;
    private  String student_registration;


    public String getStudent_email() {
        return student_email;
    }

    public void setStudent_email(String student_email) {
        this.student_email = student_email;
    }

    public String getStudent_academy() {
        return student_academy;
    }

    public void setStudent_academy(String student_academy) {
        this.student_academy = student_academy;
    }

    public String getStudent_registration() {
        return student_registration;
    }

    public void setStudent_registration(String student_registration) {
        this.student_registration = student_registration;
    }

    public String getStudent_name() {
        return student_name;
    }

    public void setStudent_name(String student_name) {
        this.student_name = student_name;
    }

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
                ", student_name='" + student_name + '\'' +
                ", student_email='" + student_email + '\'' +
                ", student_academy='" + student_academy + '\'' +
                ", student_registration='" + student_registration + '\'' +
                '}';
    }

    public Student() {
    }

}
