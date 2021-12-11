package Model;

public class Admin {
    private String admin_num;
    private String admin_password;

    public String getAdmin_num() {
        return admin_num;
    }

    public void setAdmin_num(String admin_num) {
        this.admin_num = admin_num;
    }

    public String getAdmin_password() {
        return admin_password;
    }

    public void setAdmin_password(String admin_password) {
        this.admin_password = admin_password;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "admin_num='" + admin_num + '\'' +
                ", admin_password='" + admin_password + '\'' +
                '}';
    }

    public Admin() {
    }
}
