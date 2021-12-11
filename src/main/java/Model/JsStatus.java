package Model;

public class JsStatus {
    private int js_nb;
    private String js_name;
    private String time;
    private String day;
    private String status;

    public int getJs_nb() {
        return js_nb;
    }

    public void setJs_nb(int js_nb) {
        this.js_nb = js_nb;
    }

    public String getJs_name() {
        return js_name;
    }

    public void setJs_name(String js_name) {
        this.js_name = js_name;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "JsStatus{" +
                "js_nb='" + js_nb + '\'' +
                ", js_name='" + js_name + '\'' +
                ", time='" + time + '\'' +
                ", day='" + day + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
