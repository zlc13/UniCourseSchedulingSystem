package control;


import Dao.service.StudentDao;
import Model.Student;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import Dao.impl.StudentDaoImpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class Student_control {
    private StudentDao userService= new StudentDaoImpl();

    @RequestMapping("/login")
       public String Selectaccount(String student_num, String password ,HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
           System.out.println("进入方法了");
           req.setCharacterEncoding("utf-8");
           System.out.println(student_num+password);
           Student stu=userService.LgUserItem(student_num, password);

           if(stu!=null){
               System.out.println("进入方法了");
            resp.setContentType("text/html;charset=utf-8");

            req.setAttribute("account_num",student_num);
//            req.getRequestDispatcher("/servlet_head").forward(req,resp);
            return "dt-api";
           }else{
               req.setAttribute("data","1");
//
               return "signin";
           }


       }
}
