package Model;

public class Teacher {
    private String tr_nb;
    private String tr_na;
    private String tr_pt;
    private String tr_sex;
    private String tr_age;
    private String tr_password;

    public String getTr_nb() {
        return tr_nb;
    }

    public void setTr_nb(String tr_nb) {
        this.tr_nb = tr_nb;
    }

    public String getTr_na() {
        return tr_na;
    }

    public void setTr_na(String tr_na) {
        this.tr_na = tr_na;
    }

    public String getTr_pt() {
        return tr_pt;
    }

    public void setTr_pt(String tr_pt) {
        this.tr_pt = tr_pt;
    }

    public String getTr_sex() {
        return tr_sex;
    }

    public void setTr_sex(String tr_sex) {
        this.tr_sex = tr_sex;
    }

    public String getTr_age() {
        return tr_age;
    }

    public void setTr_age(String tr_age) {
        this.tr_age = tr_age;
    }

    public String getTr_password() {
        return tr_password;
    }

    public void setTr_password(String tr_password) {
        this.tr_password = tr_password;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "tr_nb='" + tr_nb + '\'' +
                ", tr_na='" + tr_na + '\'' +
                ", tr_pt='" + tr_pt + '\'' +
                ", tr_sex='" + tr_sex + '\'' +
                ", tr_age='" + tr_age + '\'' +
                ", tr_password='" + tr_password + '\'' +
                '}';
    }

    public Teacher() {
    }
}
