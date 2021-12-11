package Model;

public class BjData {
    private String bj_nb;
    private String bj_na;
    private String bj_amount;
    private String bj_grade;

    public String getBj_grade() {
        return bj_grade;
    }

    public void setBj_grade(String bj_grade) {
        this.bj_grade = bj_grade;
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

    public String getBj_amount() {
        return bj_amount;
    }

    public void setBj_amount(String bj_amount) {
        this.bj_amount = bj_amount;
    }

    @Override
    public String toString() {
        return "BjData{" +
                "bj_nb='" + bj_nb + '\'' +
                ", bj_na='" + bj_na + '\'' +
                ", bj_amount='" + bj_amount + '\'' +
                '}';
    }
}
