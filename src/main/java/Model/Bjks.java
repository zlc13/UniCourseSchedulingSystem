package Model;

public class Bjks {
    private String bj_nb;
    private String c_nb;
    private String time;
    private String tr_nb;
    private int js_nb;
    private String bjks_nb;
    private String day;
    private String js_name;
    private String c_na;

    public String getC_na() {
        return c_na;
    }

    public void setC_na(String c_na) {
        this.c_na = c_na;
    }

    public String getJs_name() {
        return js_name;
    }

    public void setJs_name(String js_name) {
        this.js_name = js_name;
    }

    public String getBj_nb() {
        return bj_nb;
    }

    public void setBj_nb(String bj_nb) {
        this.bj_nb = bj_nb;
    }

    public String getC_nb() {
        return c_nb;
    }

    public void setC_nb(String c_nb) {
        this.c_nb = c_nb;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getTr_nb() {
        return tr_nb;
    }

    public void setTr_nb(String tr_nb) {
        this.tr_nb = tr_nb;
    }

    public int getJs_nb() {
        return js_nb;
    }

    public void setJs_nb(int js_nb) {
        this.js_nb = js_nb;
    }

    public String getBjks_nb() {
        return bjks_nb;
    }

    public void setBjks_nb(String bjks_nb) {
        this.bjks_nb = bjks_nb;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    @Override
    public String toString() {
        return "Bjks{" +
                "bj_nb='" + bj_nb + '\'' +
                ", c_nb='" + c_nb + '\'' +
                ", time='" + time + '\'' +
                ", tr_nb='" + tr_nb + '\'' +
                ", js_nb=" + js_nb +
                ", bjks_nb='" + bjks_nb + '\'' +
                ", day='" + day + '\'' +
                ", js_name='" + js_name + '\'' +
                ", c_na='" + c_na + '\'' +
                '}';
    }

    public Bjks() {
    }
}
