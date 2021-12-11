package Model;

public class Trjs {
    private String tr_nb;
    private int js_nb;
    private String c_nb;
    private String c_na;
    private String time;
    private String day;
    private String bj_nb;
    private String trjs_nb;
    private String js_name;
    private String bj_name;

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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getBj_nb() {
        return bj_nb;
    }

    public void setBj_nb(String bj_nb) {
        this.bj_nb = bj_nb;
    }

    public String getTrjs_nb() {
        return trjs_nb;
    }

    public void setTrjs_nb(String trjs_nb) {
        this.trjs_nb = trjs_nb;
    }

    public String getJs_name() {
        return js_name;
    }

    public void setJs_name(String js_name) {
        this.js_name = js_name;
    }

    public String getBj_name() {
        return bj_name;
    }

    public void setBj_name(String bj_name) {
        this.bj_name = bj_name;
    }

    @Override
    public String toString() {
        return "Trjs{" +
                "tr_nb='" + tr_nb + '\'' +
                ", js_nb=" + js_nb +
                ", c_nb='" + c_nb + '\'' +
                ", c_na='" + c_na + '\'' +
                ", time='" + time + '\'' +
                ", day='" + day + '\'' +
                ", bj_nb='" + bj_nb + '\'' +
                ", trjs_nb='" + trjs_nb + '\'' +
                ", js_name='" + js_name + '\'' +
                ", bj_name='" + bj_name + '\'' +
                '}';
    }

    public Trjs() {
    }
}
