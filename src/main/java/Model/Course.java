package Model;

public class Course {
    private String c_nb;
    private String c_na;
    private String c_tp;

    public String getC_nb() {
        return c_nb;
    }

    public void setC_nb(String c_nb) {
        this.c_nb = c_nb;
    }

    public String getC_na() {
        return c_na;
    }

    public void setC_na(String c_na) {
        this.c_na = c_na;
    }

    public String getC_tp() {
        return c_tp;
    }

    public void setC_tp(String c_tp) {
        this.c_tp = c_tp;
    }

    @Override
    public String toString() {
        return "Course{" +
                "c_nb='" + c_nb + '\'' +
                ", c_na='" + c_na + '\'' +
                ", c_tp='" + c_tp + '\'' +
                '}';
    }
}
