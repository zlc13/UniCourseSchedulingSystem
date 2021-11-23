package control;


import Dao.service.ServicesDao;
import Model.Student;
import tool.Mybatis;

import java.io.IOException;

public class login_control {
    private ServicesDao userService= new Mybatis();
       public boolean Selectaccount(String id, String pwd) throws IOException {
           System.out.println("进入方法了");
           Student stu=userService.LgUserItem(id, pwd);

           if(stu!=null){
                return true;
           }else{
               return false;
           }


       }
}
