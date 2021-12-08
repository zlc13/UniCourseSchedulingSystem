package Model;

public class Tr_class {
    private String tr_nb;
    private String bj_nb;

    public String getTr_nb() {
        return tr_nb;
    }

    public void setTr_nb(String tr_nb) {
        this.tr_nb = tr_nb;
    }

    public String getBj_nb() {
        return bj_nb;
    }

    public void setBj_nb(String bj_nb) {
        this.bj_nb = bj_nb;
    }

    @Override
    public String toString() {
        return "Tr_class{" +
                "tr_nb='" + tr_nb + '\'' +
                ", bj_nb='" + bj_nb + '\'' +
                '}';
    }

    public Tr_class() {
    }
}
