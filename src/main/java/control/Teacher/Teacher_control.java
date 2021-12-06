package control.Teacher;

import Model.Student;
import Model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import service.StudentService;
import service.TeacherService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class Teacher_control {
    @Autowired
    private TeacherService teacherService;


    //加载登录是否符合规范
    @RequestMapping("/Teacherlogin")
    public String Selectaccount(String tr_nb, String tr_password , HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        System.out.println("进入方法了");
        req.setCharacterEncoding("utf-8");
        System.out.println(tr_nb+tr_password);
        Teacher teacher=teacherService.LgTeacherItem(tr_nb, tr_password);


        if(teacher!=null){
            System.out.println("进入方法了");
            resp.setContentType("text/html;charset=utf-8");

            req.setAttribute("account_num",tr_nb);
//            req.getRequestDispatcher("/servlet_head").forward(req,resp);
            return "index1";
        }else{
            req.setAttribute("data","1");
//
            return "TeacherSignin";
        }
    }
}
