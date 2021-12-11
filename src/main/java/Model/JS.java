package Model;

public class JS {
    private  int js_nb;
    private  String js_se;
    private  String js_pt;
    private  String js_name;

    public int getJs_nb() {
        return js_nb;
    }

    public void setJs_nb(int js_nb) {
        this.js_nb = js_nb;
    }

    public String getJs_se() {
        return js_se;
    }

    public void setJs_se(String js_se) {
        this.js_se = js_se;
    }

    public String getJs_pt() {
        return js_pt;
    }

    public void setJs_pt(String js_pt) {
        this.js_pt = js_pt;
    }

    public String getJs_name() {
        return js_name;
    }

    public void setJs_name(String js_name) {
        this.js_name = js_name;
    }

    @Override
    public String toString() {
        return "JS{" +
                "js_nb=" + js_nb +
                ", js_se='" + js_se + '\'' +
                ", js_pt='" + js_pt + '\'' +
                ", js_name='" + js_name + '\'' +
                '}';
    }

    public JS() {
    }
}
